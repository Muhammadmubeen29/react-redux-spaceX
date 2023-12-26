import React from "react";
import { useDispatch } from "react-redux";
import {
	joinMission,
	leaveMission,
} from "../../features/missions/missionsSlice";

const MissionItem = ({ mission }) => {
	const dispatch = useDispatch();

	const handleParticipationToggle = () => {
		if (mission.joined) {
			dispatch(leaveMission(mission.mission_id));
		} else {
			dispatch(joinMission(mission.mission_id));
		}
	};

	return (
		<div>
			<h3>{mission.mission_name}</h3>
			<p>{mission.description}</p>
			<button onClick={handleParticipationToggle}>
				{mission.joined ? "Leave Mission" : "Join Mission"}
			</button>
		</div>
	);
};

export default MissionItem;
