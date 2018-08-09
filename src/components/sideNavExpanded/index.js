import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const sideNavExpanded = (props) => (
	<div class={style.employeeDashboard_exp_sidenav}>
		<div class={style.employeeDashboard_exp_iconsContainer}>

			<div id={style.icon_collapse} class={style.employeeDashboard_exp_iconContainer}>
				<div class={style.employeeDashboard_exp_iconInnerContainer}>
					<button onClick={props.switchSidebar}>
						<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/collapse-icon%402x.png" alt="collapse dots icon" />
					</button>
				</div>
				<p class={style.employeeDashboard_exp_p}>Collapse Navigation</p>
			</div>

			<div id={style.icon_dashboard} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenDashboard}>
						{props.dashboardOpen ? <img src="https://storage.googleapis.com/helpinghands/images/home-icon-active%402x.png" alt="active home icon"/> :
							<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/home-icon%402x.png" alt="active home icon" />	
						}
					</div>
					<p class={props.dashboardOpen ? style.employeeDashboard_exp_p_active : style.employeeDashboard_exp_p}>Dashboard</p>
				</Link>
			</div>

			<div id={style.icon_events} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenEvents}>
						{props.eventsOpen ? <img src="https://storage.googleapis.com/helpinghands/images/cal-icon-act%402x%402x.png" alt="active events icon" /> :
						<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/cal-icon%402x.png" alt="active events icon" />	
						}
					</div>
					<p class={props.eventsOpen ? style.employeeDashboard_exp_p_active : style.employeeDashboard_exp_p}>Events</p>
				</Link>
			</div>

			<div id={style.icon_events} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenMessages}>
						{props.messagesOpen ? <img src="https://storage.googleapis.com/helpinghands/images/msg-icon%402x-act.png" alt="active events icon"/> :
						<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/msg-icon%402x.png" alt="active events icon" />	
						}
					</div>
					<p class={props.messagesOpen ? style.employeeDashboard_exp_p_active : style.employeeDashboard_exp_p}>Messages</p>
				</Link>
			</div> 


			<div id={style.icon_network} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenNetwork}>
						{props.networkOpen ? <img src="https://storage.googleapis.com/helpinghands/images/friend-icon%402x-act.png" alt="friends icon"/> :
						<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/friend-icon%402x.png" alt="friends icon" />	
						}
					</div>
					<p class={props.networkOpen ? style.employeeDashboard_exp_p_active : style.employeeDashboard_exp_p}>My Network</p>
				</Link>
			</div>

			<div id={style.icon_saves} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenSaved}>
						{props.savedOpen ? <img src="https://storage.googleapis.com/helpinghands/images/bookmark-icon%402x-act.png" alt="bookmark icon"/> :
						<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/bookmark-icon%402x.png" alt="bookmark icon" />	
						}
					</div>
					<p class={props.savedOpen ? style.employeeDashboard_exp_p_active : style.employeeDashboard_exp_p}>Saved</p>
				</Link>
			</div>

			<div id={style.icon_activity} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenActivity}>
						{props.activityOpen ? <img src="https://storage.googleapis.com/helpinghands/images/activity-icon%402x-act.png" alt="activity icon"/> :
						<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/graph-icon%402x.png" alt="activity icon" />	
						}
					</div>
					<p class={props.activityOpen ? style.employeeDashboard_exp_p_active : style.employeeDashboard_exp_p}>Activity</p>
				</Link>
			</div>

			<div id={style.icon_exit} class={style.employeeDashboard_exp_iconContainer}>
				<Link href="/" class={style.employeeDashboard_icon} >
					<div class={style.employeeDashboard_exp_iconInnerContainer}>
						<img class={style.employeeDashboard_exp_icon}  src="https://storage.googleapis.com/helpinghands/images/exit-icon%402x.png" alt="exit" />
					</div>
					<p class={style.employeeDashboard_exp_p}>Exit</p>
				</Link>
			</div>

		</div>
	</div>
);

export default sideNavExpanded;