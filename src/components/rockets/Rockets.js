import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	fetchRockets,
	reserveRocket,
	cancelRocket,
} from "../../features/rocketsSlice";

const Rockets = () => {
	const dispatch = useDispatch();
	const rockets = useSelector((state) => state.rockets.rockets);

	useEffect(() => {
		dispatch(fetchRockets());
	}, [dispatch]);

	const handleReservationToggle = (id, reserved) => {
		if (reserved) {
			dispatch(cancelRocket(id));
		} else {
			dispatch(reserveRocket(id));
		}
	};
	return (
		<div>
			{rockets.map((rocket) => (
				<div key={rocket.id}>
					<h3>{rocket.name}</h3>
					<button
						onClick={() =>
							handleReservationToggle(rocket.id, rocket.reserved)
						}
					>
						{rocket.reserved ? "Cancel Booking" : "Reserve Rocket"}
					</button>
				</div>
			))}
		</div>
	);
};

export default Rockets;
