import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import HeaderEE from '../../components/headerEE';
import HeaderExp from '../../components/headerExp';
import SideNavCollapsed from '../../components/sideNavCollapsed';
import SideNavExpanded from '../../components/sideNavExpanded';

import Dashboard from '../../components/ee/Dashboard';
import Profile from '../../components/ee/Profile';
import Settings from '../../components/ee/Settings';
import Events from '../../components/ee/Events';
import Messages from '../../components/ee/Messages';
import Network from '../../components/ee/Network';
import Saved from '../../components/ee/Saved';
import Activity from '../../components/ee/Activity';

export default class EmployeeDashboard extends Component {
	state = {
		sidebarOpen: true,
		dashboardOpen: true,
		profileOpen: false,
		settingsOpen: false,
		eventsOpen: false,
		messagesOpen: false,
		networkOpen: false,
		savedOpen: false,
		activityOpen: false
	};

	handleViewSidebar = () => {
		this.setState({ sidebarOpen: !this.state.sidebarOpen });
	}

	displayCollapsedLogo = () => {
		return (
			<div class={style.employeeDashboard_logo}>
				<HeaderEE />
			</div>
		)
	}

	displayExpandedLogo = () => {
		return (
			<div class={style.employeeDashboard_logo_exp}>
				<HeaderExp />
			</div>
		)
	}

	handleOpenDashboard = () => {
		this.setState({ 
			dashboardOpen: true,
			profileOpen: false,
			settingsOpen: false,
			eventsOpen: false,
			messagesOpen: false,
			networkOpen: false,
			savedOpen: false,
			activityOpen: false
		});
	}

	handleOpenProfile = () => {
		this.setState({ 
			dashboardOpen: false,
			profileOpen: true,
			settingsOpen: false,
			eventsOpen: false,
			messagesOpen: false,
			networkOpen: false,
			savedOpen: false,
			activityOpen: false
		});
	}

	handleOpenSettings = () => {
		this.setState({ 
			dashboardOpen: false,
			profileOpen: false,
			settingsOpen: true,
			eventsOpen: false,
			messagesOpen: false,
			networkOpen: false,
			savedOpen: false,
			activityOpen: false
		});
	}

	handleOpenEvents = () => {
		this.setState({ 
			dashboardOpen: false,
			profileOpen: false,
			settingsOpen: false,
			eventsOpen: true,
			messagesOpen: false,
			networkOpen: false,
			savedOpen: false,
			activityOpen: false
		});
	}

	handleOpenMessages = () => {
		this.setState({ 
			dashboardOpen: false,
			profileOpen: false,
			settingsOpen: false,
			eventsOpen: false,
			messagesOpen: true,
			networkOpen: false,
			savedOpen: false,
			activityOpen: false
		});
	}

	handleOpenNetwork = () => {
		this.setState({ 
			dashboardOpen: false,
			profileOpen: false,
			settingsOpen: false,
			eventsOpen: false,
			messagesOpen: false,
			networkOpen: true,
			savedOpen: false,
			activityOpen: false
		});
	}

	handleOpenSaved = () => {
		this.setState({ 
			dashboardOpen: false,
			profileOpen: false,
			settingsOpen: false,
			eventsOpen: false,
			messagesOpen: false,
			networkOpen: false,
			savedOpen: true,
			activityOpen: false
		});
	}

	handleOpenActivity = () => {
		this.setState({ 
			dashboardOpen: false,
			profileOpen: false,
			settingsOpen: false,
			eventsOpen: false,
			messagesOpen: false,
			networkOpen: false,
			savedOpen: false,
			activityOpen: true
		});
	}

	displayDashboard = () => (<div><Dashboard /></div>);
	displayProfile = () => (<div><Profile /></div>);
	displaySettings = () => (<div><Settings /></div>);
	displayEvents = () => (<div><Events /></div>);
	displayMessages = () => (<div><Messages /></div>);
	displayNetwork = () => (<div><Network /></div>);
	displaySaved = () => (<div><Saved /></div>);
	displayActivity = () => (<div><Activity /></div>);


	render() {
		return (
			<div class={style.employeeDashboard}>
				<div class={style.employeeDashboard_topnav}>

				{this.state.sidebarOpen ? this.displayExpandedLogo() : this.displayCollapsedLogo() }			

					<div class={this.state.sidebarOpen ? style.employeeDashboard_flexContainerExp : style.employerDashboard_flexContainer}>

						{!this.state.sidebarOpen &&
						<div class={style.employeeDashboard_linkContainer}>
							<p onClick={this.handleOpenDashboard} class={this.state.dashboardOpen ? style.employeeDashboard_link_active : style.employeeDashboard_link}>Dashboard</p>
							<p onClick={this.handleOpenProfile} class={this.state.profileOpen ? style.employeeDashboard_link_active : style.employeeDashboard_link}>My Profile</p>
							<p onClick={this.handleOpenSettings} class={this.state.settingsOpen ? style.employeeDashboard_link_active : style.employeeDashboard_link}>Settings</p>
						</div>
						}

						<div class={style.employeeDashboard_searchProfileContainer}>
							<div class={style.employeeDashboard_searchContainer}>
								<img src="https://storage.googleapis.com/helpinghands/images/magnifying-glass-icon.png" alt="magnifying glass icon" />
								<input class={this.state.sidebarOpen ? style.employeeDashboard_searchExp : style.employeeDashboard_search} placeholder="Search Events, Location, Friends, Companies" />
							</div>

							<div class={style.employeeDashboard_profileContainer}>
								<img class={style.employeeDashboard_profileContainer_img} src="https://storage.googleapis.com/helpinghands/images/profile_avatar%402x.png" alt="your profile thumbnail" />
								<p class={style.employeeDashboard_profileContainer_p}>Welcome Back!</p>
							</div>
						</div>
					</div>
				</div>

				{this.state.sidebarOpen 
					? 
					<SideNavExpanded 
						switchSidebar={this.handleViewSidebar} 
						onOpenDashboard={this.handleOpenDashboard} 
						onOpenEvents={this.handleOpenEvents}
						onOpenMessages={this.handleOpenMessages}
						onOpenNetwork={this.handleOpenNetwork}
						onOpenSaved={this.handleOpenSaved}
						onOpenActivity={this.handleOpenActivity}  /> 
					: 
					<SideNavCollapsed 
						switchSidebar={this.handleViewSidebar}
						onOpenDashboard={this.handleOpenDashboard} 
						onOpenEvents={this.handleOpenEvents}
						onOpenMessages={this.handleOpenMessages}
						onOpenNetwork={this.handleOpenNetwork}
						onOpenSaved={this.handleOpenSaved}
						onOpenActivity={this.handleOpenActivity}  /> 
				}

				
				<div class={this.state.sidebarOpen ? style.employeeDashboard_mainContentContainerExp : style.employeeDashboard_mainContentContainer}>
						{this.state.dashboardOpen && this.displayDashboard()}
						{this.state.profileOpen && this.displayProfile()}
						{this.state.settingsOpen && this.displaySettings()}
						{this.state.eventsOpen && this.displayEvents()}
						{this.state.messagesOpen && this.displayMessages()}
						{this.state.networkOpen && this.displayNetwork()}
						{this.state.savedOpen && this.displaySaved()}
						{this.state.activityOpen && this.displayActivity()}
				</div>
			</div>
		);
	}
}