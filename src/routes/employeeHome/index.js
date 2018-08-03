import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const EmployeeHome = () => (
	<div class={style.employee}>
		<div class={style.arrow}>
			<Link href="/partner" class={style.left}>&lt;</Link>
			<Link href="/employer" class={style.right}>&gt;</Link>
		</div>
		<Link href="/dashboard">
			<div class={style.employee}>
				<h1 class={style.employee_header}>HH</h1>
				<p class={style.employee_paragraph}>Employee / Volunteer Dashboard</p>
			</div>
		</Link>
	</div>
);

export default EmployeeHome;
