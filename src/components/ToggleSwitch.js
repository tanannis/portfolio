import { useState } from "react";

import "../styles/ToggleSwitch.scss";

const ToggleSwitch = () => {
	const [isToggleOn, setIsToggleOn] = useState(false);

	const handleToggleSwitch = () => {
		return setIsToggleOn(!isToggleOn);
	};

	return (
		<div>
			Vanilla toggle switch
			<button onClick={handleToggleSwitch}>{isToggleOn ? "ON" : "OFF"}</button>

			<br />

			{/* Create a new toggle switch from scratch */}
			<input
				className="react-switch-checkbox"
				id={`react-switch-new`}
				type="checkbox"
			/>
			<label className="react-switch-label" htmlFor={`react-switch-new`}>
				<span className={`react-switch-button`} />
			</label>

		</div>
	);
};

export default ToggleSwitch;
