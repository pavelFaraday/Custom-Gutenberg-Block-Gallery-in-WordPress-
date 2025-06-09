import { Dashicon } from "@wordpress/components";
import "./info.scss";

const Info = ({ title, icon }) => {
	return (
		<div className="info">
			<Dashicon icon={icon} />
			<span>{title}</span>
		</div>
	);
};

export default Info;
