import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Helmet from 'preact-helmet';

// Code-splitting is automated for routes
import Employee from '../routes/employeeHome';
import EmployeeDashboard from '../routes/employeeDashboard';
import Employer from '../routes/employerHome';
import EmployerDashboard from '../routes/employerDashboard';
import Partner from '../routes/partnerHome';
import PartnerDashboard from '../routes/partnerDashboard';
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
        <Helmet 
          title="Helping Hands" 
          titleAttributes={{itemprop: "name", lang: "en"}}
        />
			
				<Router onChange={this.handleRoute}>
					<Employee path="/" />
					<EmployeeDashboard path="/dashboard" />
					<Employer path="/employer" />
					<EmployerDashboard path="/employer/dashboard" />
					<Partner path="/partner" />
					<PartnerDashboard path="/partner/dashboard" />
					<Home path="/home" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
