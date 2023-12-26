import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<NavLink 
                    to="/" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
					Rockets
				</NavLink>
				<NavLink 
                    to="/missions" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
					Missions
				</NavLink>
				<NavLink 
                    to="/my-profile" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
					My Profile
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
