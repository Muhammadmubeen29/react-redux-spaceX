import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, toggleMission } from '../../features/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, loading } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMissions());
  }, [dispatch, missions.length]);

  if (loading) return <p>Loading missions...</p>;

  return (
    <div>
      <h2>Missions</h2>
      {missions.map(mission => (
        <div key={mission.mission_id}>
          <h3>{mission.mission_name}</h3>
          <p>{mission.description}</p>
          <button onClick={() => dispatch(toggleMission(mission.mission_id))}>
            {mission.joined ? 'Leave Mission' : 'Join Mission'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Missions;
