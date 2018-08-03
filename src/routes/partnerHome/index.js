import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const PartnerHome = () => (
	<div class={style.partner}>
		<Link href="/partner/dashboard">
			<div class={style.partner}>
				<h1 class={style.partner_header}>HH</h1>
				<p class={style.partner_paragraph}>Nonprofit Organization Dashboard</p>
			</div>
		</Link>
	</div>
);

export default PartnerHome;
