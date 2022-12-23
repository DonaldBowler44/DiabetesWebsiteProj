import React from 'react';
import Myimage from "../../../../assets/kisspng-caduceus-as-a-symbol-of-medicine-staff-of-hermes-l-doctor-symbol-cliparts-5a88666ceca992.2170441615188885569694.png";
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
			<img src={Myimage} alt="cadeus" height="90" width="90" />
		<NavLink to='/about' activestyle="true">
			About
		</NavLink>
		<NavLink to='/Treatment' aactivestyle="true">
			Treatment
		</NavLink>
		<NavLink to='/annual' activestyle="true">
			Annual Report
		</NavLink>
		<NavLink to='/team' activestyle="true">
			Teams
		</NavLink>
		<NavLink to='/blogs' activestyle="true">
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activestyle="true">
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
