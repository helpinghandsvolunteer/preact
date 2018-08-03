import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import headerPartner from '../../components/headerPartner';

const PartnerDashboard = () => (
	<div class={style.partner}>
		<headerPartner />
		<h1>Partner Dashboard</h1>
		<p>This is the Partner Dashboard component.</p>
		<Link href="/partner">Partner Home</Link>
	</div>
);

export default PartnerDashboard;
