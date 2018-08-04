import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const sideNavExpanded = (props) => (
	<div class={style.employeeDashboard_sidenav}>
		<div class={style.employeeDashboard_iconContainer}>
			<button onClick={props.handleViewSidebar}>
				<img class={style.employeeDashboard_icon} src="https://storage.googleapis.com/helpinghands/images/dots-icon%402x.png" alt="collapse dots icon" />
			</button>
			<img class={style.employeeDashboard_icon} src="https://storage.googleapis.com/helpinghands/images/home-icon%402x.png" alt="active home icon" />
			<img class={style.employeeDashboard_icon}  src="https://storage.googleapis.com/helpinghands/images/cal-icon%402x.png" alt="events calendar icon" />
			<img class={style.employeeDashboard_icon} src="https://storage.googleapis.com/helpinghands/images/msg-icon%402x.png" alt="message icon" />
			<img class={style.employeeDashboard_icon}  src="https://storage.googleapis.com/helpinghands/images/friend-icon%402x.png" alt="friends icon" />
			<img class={style.employeeDashboard_icon} src="https://storage.googleapis.com/helpinghands/images/bookmark-icon%402x.png" alt="bookmark icon" />
			<img class={style.employeeDashboard_icon} src="https://storage.googleapis.com/helpinghands/images/graph-icon%402x.png" alt="graphs icon" />

			<Link href="/" class={style.employeeDashboard_icon} >
				<img class={style.employeeDashboard_icon_exitIcon}  src="https://storage.googleapis.com/helpinghands/images/exit-icon%402x.png" alt="exit" />
			</Link>
		</div>
	</div>
);

export default sideNavExpanded;