import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const sideNavExpanded = (props) => (
	<div class={style.employeeDashboard_exp_sidenav}>
		<div class={style.employeeDashboard_exp_iconsContainer}>
			<div id={style.icon_collapse} class={style.employeeDashboard_exp_iconContainer}>
				<button onClick={props.switchSidebar}>
					<img class={style.employeeDashboard_icon} src="https://storage.googleapis.com/helpinghands/images/collapse-icon%402x.png" alt="collapse dots icon" />
				</button>
				<p class={style.employeeDashboard_exp_p}>Collapse Navigation</p>
			</div>

			<div id={style.icon_dashboard} class={style.employeeDashboard_exp_iconContainer}>
				<img class={style.employeeDashboard_icon} src="https://storage.googleapis.com/helpinghands/images/home-icon%402x.png" alt="active home icon" />
				<p class={style.employeeDashboard_exp_p}>Dashboard</p>
			</div>
			<div id={style.icon_events} class={style.employeeDashboard_exp_iconContainer}>
				<img class={style.employeeDashboard_icon}  src="https://storage.googleapis.com/helpinghands/images/cal-icon%402x.png" alt="events calendar icon" />
				<p class={style.employeeDashboard_exp_p}>Events</p>
			</div>
			<div id={style.icon_messages} class={style.employeeDashboard_exp_iconContainer}>
				<img class={style.employeeDashboard_icon} src="https://storage.googleapis.com/helpinghands/images/msg-icon%402x.png" alt="message icon" />
				<p class={style.employeeDashboard_exp_p}>Messages</p>
			</div>
			<div id={style.icon_network} class={style.employeeDashboard_exp_iconContainer}>
				<img class={style.employeeDashboard_icon}  src="https://storage.googleapis.com/helpinghands/images/friend-icon%402x.png" alt="friends icon" />
				<p class={style.employeeDashboard_exp_p}>My Network</p>
			</div>
			<div id={style.icon_saves} class={style.employeeDashboard_exp_iconContainer}>
				<img class={style.employeeDashboard_icon} src="https://storage.googleapis.com/helpinghands/images/bookmark-icon%402x.png" alt="bookmark icon" />
				<p class={style.employeeDashboard_exp_p}>Saved</p>
			</div>
			<div id={style.icon_activity} class={style.employeeDashboard_exp_iconContainer}>
				<img class={style.employeeDashboard_icon} src="https://storage.googleapis.com/helpinghands/images/graph-icon%402x.png" alt="graphs icon" />
				<p class={style.employeeDashboard_exp_p}>Activity</p>
			</div>
			<div id={style.icon_exit} class={style.employeeDashboard_exp_iconContainer}>
				<Link href="/" class={style.employeeDashboard_icon} >
					<img class={style.employeeDashboard_icon_exitIcon}  src="https://storage.googleapis.com/helpinghands/images/exit-icon%402x.png" alt="exit" />
				</Link>
				<p class={style.employeeDashboard_exp_p}>Exit</p>
			</div>

		</div>
	</div>
);

export default sideNavExpanded;