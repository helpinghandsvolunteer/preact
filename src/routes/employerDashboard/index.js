import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import headerER from '../../components/headerER';

const EmployerDashboard = () => (
	<div class={style.employer}>
		<headerER />
		<h1>Employer Dashboard</h1>
		<p>This is the Employer Dashboard component.</p>
		<Link href="/employer">Employer Home</Link>
	</div>
);

export default EmployerDashboard;
