import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const sideNavExpanded = (props) => (
	<div class={style.employeeDashboard_exp_sidenav}>
		<div class={style.employeeDashboard_exp_iconsContainer}>
			<div id={style.icon_collapse} class={style.employeeDashboard_exp_iconContainer}>
				<div class={style.employeeDashboard_exp_iconInnerContainer}>
					<button onClick={props.switchSidebar}>
						<img class={style.employeeDashboard_exp_icon} 
						src="https://storage.googleapis.com/helpinghands/images/collapse-icon%402x.png" alt="collapse dots icon" />
					</button>
				</div>
			</div>

			<div id={style.icon_dashboard} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenDashboard}>
						{props.dashboardOpen ? <img src="https://storage.googleapis.com/helpinghands/images/home-icon-active%402x.png"  alt="active home icon" /> :
							<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/home-icon%402x.png" alt=" home icon" />	
						}
					</div>
				</Link>
			</div>

			<div id={style.icon_events} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenEvents}>
						{props.eventsOpen ? <img src="https://storage.googleapis.com/helpinghands/images/cal-icon-act%402x%402x.png"  alt="active events icon"/> :
						<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/cal-icon%402x.png" alt=" events icon" />	
						}
					</div>
				</Link>
			</div>

			<div id={style.icon_events} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenMessages}>
						{props.messagesOpen ? <img src="https://storage.googleapis.com/helpinghands/images/msg-icon%402x-act.png" alt="active events icon" /> :
						<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/msg-icon%402x.png" alt=" events icon" />	
						}
					</div>
				</Link>
			</div>

			<div id={style.icon_network} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenNetwork}>
						{props.networkOpen ? <img src="https://storage.googleapis.com/helpinghands/images/friend-icon%402x-act.png" alt="friends icon"/> :
						<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/friend-icon%402x.png" alt="friends icon" />	
						}
					</div>
				</Link>
			</div>

			<div id={style.icon_activity} class={style.employeeDashboard_exp_iconContainer}>
				<Link >
					<div class={style.employeeDashboard_exp_iconInnerContainer} onClick={props.onOpenActivity}>
						{props.activityOpen ? <img src="https://storage.googleapis.com/helpinghands/images/activity-icon%402x-act.png" alt="activity icon"/> :
						<img class={style.employeeDashboard_exp_icon} src="https://storage.googleapis.com/helpinghands/images/graph-icon%402x.png" alt="activity icon" />	
						}
					</div>
				</Link>
			</div>

			<div id={style.icon_exit} class={style.employeeDashboard_exp_iconContainer}>
				<Link href="/" class={style.employeeDashboard_icon} >
					<div class={style.employeeDashboard_exp_iconInnerContainer}>
						<img class={style.employeeDashboard_exp_icon}  src="https://storage.googleapis.com/helpinghands/images/exit-icon%402x.png" alt="exit" />
					</div>
				</Link>
			</div>

		</div>
	</div>
);

export default sideNavExpanded;