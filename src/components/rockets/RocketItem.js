import React from "react";
import { useDispatch } from "react-redux";
import {
	reserveRocket,
	cancelRocket,
} from "../../features/rockets/rocketsSlice";

const RocketItem = ({ rocket }) => {
	const dispatch = useDispatch();

	const handleReservationToggle = () => {
		if (rocket.reserved) {
			dispatch(cancelRocket(rocket.id));
		} else {
			dispatch(reserveRocket(rocket.id));
		}
	};

	return (
		<div>
			<h3>{rocket.name}</h3>
			<p>{rocket.description}</p>
			<button onClick={handleReservationToggle}>
				{rocket.reserved ? "Cancel Booking" : "Reserve Rocket"}
			</button>
		</div>
	);
};

export default RocketItem;
