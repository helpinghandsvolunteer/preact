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

			<div class={style.employeeDashboard_linkContainer}>
				<p class={style.employeeDashboard_link}>Dashboard</p>
				<p class={style.employeeDashboard_link}>My Profile</p>
				<p class={style.employeeDashboard_link}>Settings</p>
			</div>

			<div class={style.employeeDashboard_searchContainer}>
				<input class={style.employeeDashboard_search} placeholder="Search Events, Location, Friends, Companies" />
			</div>

			<div class={style.employeeDashboard_profile}>
				<div class={style.employeeDashboard_profileImg}>
					<img src="" alt="profile image"/>
				</div>
				<div class={style.employeeDashboard_profileGreeting}>
					<p>Welcome back!</p>
				</div>
			</div>
		</div>
	</div>
);

export default EmployeeDashboard;
