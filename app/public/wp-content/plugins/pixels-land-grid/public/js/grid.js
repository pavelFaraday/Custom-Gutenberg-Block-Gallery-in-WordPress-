jQuery(document).ready(function ($) {
  // This variable is injected by PHP with image blocks info:
  const largeImages = PixelsLandData?.images || [];

  // Config
  const CELL_SIZE = 10; // px per cell
  const ROWS = 140; // fixed number of rows - can be dynamic if you want

  function generateGrid() {
    const $grid = $("#grid");
    const $cols = $("#col-labels");
    const $rows = $("#row-labels");

    $grid.empty();
    $cols.empty();
    $rows.empty();

    // Calculate how many columns fit on screen (minus label widths)
    const screenWidth = $(window).width() - 40; // 40px for labels sidebar
    const screenHeight = $(window).height() - 100; // some header padding

    const cols = Math.floor(screenWidth / CELL_SIZE);

    // Set grid container CSS grid template
    $grid.css({
      "grid-template-columns": `repeat(${cols}, ${CELL_SIZE}px)`,
      "grid-template-rows": `repeat(${ROWS}, ${CELL_SIZE}px)`,
      height: `${screenHeight}px`,
      width: `${cols * CELL_SIZE}px`,
      position: "relative",
      overflowY: "scroll",
    });

    // Prepare occupied cells map to avoid overlapping blocks
    const occupied = new Set();
    const imageBlocks = new Map();

    // Register all occupied cells & store top-left cells for images
    largeImages.forEach((img) => {
      for (let dy = 0; dy < img.height_cells; dy++) {
        for (let dx = 0; dx < img.width_cells; dx++) {
          const key = `${img.start_row + dy}-${img.start_col + dx}`;
          occupied.add(key);
        }
      }
      // Mark top-left cell with image block info
      imageBlocks.set(`${img.start_row}-${img.start_col}`, img);
    });

    // Generate grid cells
    for (let r = 1; r <= ROWS; r++) {
      for (let c = 1; c <= cols; c++) {
        const key = `${r}-${c}`;

        // If this cell is top-left of image block, render image block div spanning width and height
        if (imageBlocks.has(key)) {
          const img = imageBlocks.get(key);
          $grid.append(`
              <div class="grid-cell" style="
                grid-column: ${img.start_col} / span ${img.width_cells};
                grid-row: ${img.start_row} / span ${img.height_cells};
                padding: 0;
                position: relative;
              ">
                <a href="${img.link_url || "#"}" target="_blank" rel="noopener noreferrer">
                  <img src="${img.img_url}" alt="image block" style="width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none;" />
                </a>
              </div>
            `);
        }
        // If not occupied, render normal empty cell
        else if (!occupied.has(key)) {
          $grid.append(
            `<div class="grid-cell" data-row="${r}" data-col="${c}"></div>`
          );
        }
        // else occupied cell inside image block - skip rendering (image block covers it)
      }
    }

    // Generate column labels vertically (split digits with <br>)
    $cols.css("grid-template-columns", `repeat(${cols}, ${CELL_SIZE}px)`);
    for (let c = 1; c <= cols; c++) {
      const label = c.toString().split("").join("<br>");
      $cols.append(`<div class="col-label">${label}</div>`);
    }

    // Generate row labels horizontally
    $rows.css("grid-template-rows", `repeat(${ROWS}, ${CELL_SIZE}px)`);
    for (let r = 1; r <= ROWS; r++) {
      $rows.append(`<div class="row-label">${r}</div>`);
    }

    // Sync vertical scroll of grid and row labels
    $grid.on("scroll", () => {
      $("#row-labels").scrollTop($grid.scrollTop());
    });

    // Click handler for empty cells (toggle active class + play sound)
    $(".grid-cell[data-row]").on("click", function () {
      const row = $(this).data("row");
      const col = $(this).data("col");

      // Play sound if exists
      const clickAudio = document.getElementById("click-sound");
      if (clickAudio) {
        clickAudio.currentTime = 0;
        clickAudio.play();
      }

      $(this).toggleClass("active");
      console.log(`Clicked cell: Row ${row}, Col ${col}`);
    });
  }

  // Initial grid render
  generateGrid();

  // Redraw grid on window resize
  $(window).on("resize", () => {
    generateGrid();
  });

  // Optional: Theme toggle button logic (if you keep it)
  $("#theme-toggle").on("click", function () {
    const $body = $("body");
    const currentTheme = $body.attr("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    $body.attr("data-theme", newTheme);
    $(this).text(newTheme === "dark" ? "🌞 Day Mode" : "🌙 Night Mode");
  });
});
