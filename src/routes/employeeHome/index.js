import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const EmployeeHome = () => (
	<div class={style.employee}>
		<Link href="/dashboard">
			<div class={style.employee}>
				<h1 class={style.employee_header}>HH</h1>
				<p class={style.employee_paragraph}>Employee / Volunteer Dashboard</p>
			</div>
		</Link>
	</div>
);

export default EmployeeHome;
