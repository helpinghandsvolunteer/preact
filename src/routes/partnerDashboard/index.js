import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const PartnerDashboard = () => (
	<div class={style.partner}>
		<h1>Partner Dashboard</h1>
		<p>This is the Partner Dashboard component.</p>
		<Link href="/partner">Partner Home</Link>
	</div>
);

export default PartnerDashboard;
