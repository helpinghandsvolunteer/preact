import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const EmployerDashboard = () => (
	<div class={style.employer}>
		<h1>Employer Dashboard</h1>
		<p>This is the Employer Dashboard component.</p>
		<Link href="/employer">Employer Home</Link>
	</div>
);

export default EmployerDashboard;
