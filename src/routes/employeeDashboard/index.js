import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import HeaderEE from '../../components/headerEE';

const EmployeeDashboard = () => (
	<div class={style.employeeDashboard}>
		<div class={style.employeeDashboard_topnav}>
			<div class={style.employeeDashboard_logo}>
				<HeaderEE />
			</div>
			<div class={style.employerDashboard_flexContainer}>
				<div class={style.employeeDashboard_linkContainer}>
					<p class={style.employeeDashboard_link}>Dashboard</p>
					<p class={style.employeeDashboard_link}>My Profile</p>
					<p class={style.employeeDashboard_link}>Settings</p>
				</div>

				<div class={style.employeeDashboard_searchProfileContainer}>
					<div class={style.employeeDashboard_searchContainer}>
						<img src="https://storage.googleapis.com/helpinghands/images/magnifying-glass-icon.png" alt="magnifying glass icon"/>
						<input class={style.employeeDashboard_search} placeholder="Search Events, Location, Friends, Companies" />
					</div>

					<div class={style.employeeDashboard_profileContainer}>
						<img class={style.employeeDashboard_profileContainer_img} src="https://storage.googleapis.com/helpinghands/images/profile_avatar%402x.png" alt="your profile thumbnail" />
						<p class={style.employeeDashboard_profileContainer_p}>Welcome Back!</p>
					</div>
				</div>
			</div>
		</div>

		<div class={style.employeeDashboard_sidenav}>
		</div>
	</div>
);

export default EmployeeDashboard;
