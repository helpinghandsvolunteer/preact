import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const EmployerHome = () => (
	<div class={style.employer}>
		<div class={style.arrow}>
			<Link href="/" class={style.left}>&lt;</Link>
			<Link href="/partner" class={style.right}>&gt;</Link>
		</div>
		<Link href="/employer/dashboard">
			<div class={style.employer}>
				<h1 class={style.employer_header}>HH</h1>
				<p class={style.employer_paragraph}>Company HR Dashboard</p>
			</div>
		</Link>
	</div>
);

export default EmployerHome;
