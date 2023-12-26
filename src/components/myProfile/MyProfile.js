import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
	const rockets = useSelector((state) =>
		state.rockets.rockets?.filter((rocket) => rocket.reserved)
	);
	const missions = useSelector((state) =>
		state.missions.entities?.filter((mission) => mission.joined)
	);

	return (
		<div>
			<h2>My Profile</h2>
			<section>
				<h3>My Rockets</h3>
				{rockets &&
					rockets.map((rocket) => (
						<p key={rocket.id}>{rocket.name}</p>
					))}
			</section>
			<section>
				<h3>My Missions</h3>
				{missions &&
					missions.map((mission) => (
						<p key={mission.mission_id}>{mission.name}</p>
					))}
			</section>
		</div>
	);
};

export default MyProfile;
