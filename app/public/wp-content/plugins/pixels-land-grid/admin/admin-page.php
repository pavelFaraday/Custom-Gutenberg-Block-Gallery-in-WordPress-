<?php
if (!current_user_can('manage_options')) {
    wp_die('Unauthorized');
}

global $wpdb;
$table_name = $wpdb->prefix . 'pixels_land_images';

// Handle Add
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['plg_nonce']) && wp_verify_nonce($_POST['plg_nonce'], 'plg_save_image')) {
    $data = [
        'start_row' => intval($_POST['start_row']),
        'start_col' => intval($_POST['start_col']),
        'width_cells' => intval($_POST['width_cells']),
        'height_cells' => intval($_POST['height_cells']),
        'img_url' => sanitize_text_field($_POST['img_url']),
        'link_url' => sanitize_text_field($_POST['link_url']),
    ];

    if (!empty($_POST['edit_id'])) {
        $edit_id = intval($_POST['edit_id']);
        $wpdb->update($table_name, $data, ['id' => $edit_id]);
        echo '<div class="updated"><p>Image block updated!</p></div>';
    } else {
        $wpdb->insert($table_name, $data);
        echo '<div class="updated"><p>Image block added!</p></div>';
    }
}


// Handle Delete
if (isset($_GET['delete'])) {
    $delete_id = intval($_GET['delete']);
    $wpdb->delete($table_name, ['id' => $delete_id]);
    echo '<div class="updated"><p>Image block deleted!</p></div>';
}

$edit_id = isset($_GET['edit']) ? intval($_GET['edit']) : 0;
$edit_image = null;

if ($edit_id) {
    $edit_image = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table_name WHERE id = %d", $edit_id), ARRAY_A);
}


$images = $wpdb->get_results("SELECT * FROM $table_name", ARRAY_A);
?>

<h1>Pixels Land Grid Admin</h1>

<h2><?= $edit_image ? 'Edit Image Block' : 'Add New Image Block' ?></h2>

<form method="POST" class="plg-form-horizontal">
    <?php wp_nonce_field('plg_save_image', 'plg_nonce'); ?>

    <?php if ($edit_image): ?>
        <input type="hidden" name="edit_id" value="<?= esc_attr($edit_image['id']) ?>">
    <?php endif; ?>

    <div class="plg-form-row">
        <div class="plg-form-field">
            <p><input type="number" name="start_row" placeholder="Start Row" required min="1" value="<?= esc_attr($edit_image['start_row'] ?? '') ?>"></p>
        </div>
        <div class="plg-form-field">
            <p><input type="number" name="start_col" placeholder="Start Column" required min="1" value="<?= esc_attr($edit_image['start_col'] ?? '') ?>"></p>
        </div>
        <div class="plg-form-field">
            <p><input type="number" name="width_cells" placeholder="Width (cells)" required min="1" value="<?= esc_attr($edit_image['width_cells'] ?? '') ?>"></p>
        </div>
        <div class="plg-form-field">
            <p><input type="number" name="height_cells" placeholder="Height (cells)" required min="1" value="<?= esc_attr($edit_image['height_cells'] ?? '') ?>"></p>
        </div>
        <div class="plg-form-field">
            <p><input type="text" name="img_url" placeholder="Image URL" required value="<?= esc_attr($edit_image['img_url'] ?? '') ?>"></p>
        </div>
        <div class="plg-form-field">
            <p><input type="text" name="link_url" placeholder="Link URL" required value="<?= esc_attr($edit_image['link_url'] ?? '') ?>"></p>
        </div>

        <div class="plg-form-actions">
            <?php if ($edit_image): ?>
                <a class="plg-cancel-btn" href="<?= admin_url('admin.php?page=pixels-land-grid') ?>">Cancel Edit</a>
            <?php endif; ?>
            <input type="submit" class="button button-primary" value="<?= $edit_image ? 'Update Image Block' : 'Add Image Block' ?>">
        </div>
    </div>
</form>




<h2>Existing Image Blocks</h2>
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr>
            <th>ID</th>
            <th>Start Row</th>
            <th>Start Col</th>
            <th>Width</th>
            <th>Height</th>
            <th>Image URL</th>
            <th>Link URL</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($images as $img): ?>
            <tr>
                <td><?= esc_html($img['id']) ?></td>
                <td><?= esc_html($img['start_row']) ?></td>
                <td><?= esc_html($img['start_col']) ?></td>
                <td><?= esc_html($img['width_cells']) ?></td>
                <td><?= esc_html($img['height_cells']) ?></td>
                <td><a href="<?= esc_url($img['img_url']) ?>" target="_blank">View</a></td>
                <td><a href="<?= esc_url($img['link_url']) ?>" target="_blank">Link</a></td>
                <td>
                    <a href="<?= admin_url('admin.php?page=pixels-land-grid&edit=' . intval($img['id'])) ?>">Edit</a> |
                    <a href="<?= admin_url('admin.php?page=pixels-land-grid&delete=' . intval($img['id'])) ?>" onclick="return confirm('Delete?')">Delete</a>
                </td>

            </tr>
        <?php endforeach; ?>
    </tbody>
</table>