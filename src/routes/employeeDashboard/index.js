import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import HeaderEE from '../../components/headerEE';
import HeaderExp from '../../components/headerExp';
import SideNavCollapsed from '../../components/sideNavCollapsed';
import SideNavExpanded from '../../components/sideNavExpanded';

import Dashboard from '../../components/eeDashboard';
import Profile from '../../components/eeProfile';
import Settings from '../../components/eeSettings';

export default class EmployeeDashboard extends Component {
	state = {
		sidebarOpen: true,
		dashboardOpen: true,
		profileOpen: false,
		settingsOpen: false,
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
		});
	}

	handleOpenProfile = () => {
		this.setState({ 
			dashboardOpen: false,
			profileOpen: true,
			settingsOpen: false,
		});
	}

	handleOpenSettings = () => {
		this.setState({ 
			dashboardOpen: false,
			profileOpen: false,
			settingsOpen: true,
		});
	}

	displayDashboard = () => {
		return (
			<div>
				<Dashboard />
			</div>
		);
	}
	
	displayProfile = () => {
		return (
			<div>
				<Profile />
			</div>
		);
	}

	displaySettings = () => {
		return (
			<div>
				<Settings />
			</div>
		);
	}

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

				{this.state.sidebarOpen ? <SideNavExpanded switchSidebar={this.handleViewSidebar} /> : <SideNavCollapsed switchSidebar={this.handleViewSidebar} />}

				
				<div class={this.state.sidebarOpen ? style.employeeDashboard_mainContentContainerExp : style.employeeDashboard_mainContentContainer}>
						{this.state.dashboardOpen && this.displayDashboard()}
						{this.state.profileOpen && this.displayProfile()}
						{this.state.settingsOpen && this.displaySettings()}
				</div>
			</div>
		);
	}
}
