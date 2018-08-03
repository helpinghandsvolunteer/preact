import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const EmployeeDashboard = () => (
	<div class={style.employee}>
		<h1>Employee Dashboard</h1>
		<p>This is the Employee Dashboard component.</p>
		<Link href="/">Employee Home</Link>
	</div>
);

export default EmployeeDashboard;
