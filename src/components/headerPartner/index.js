import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const HeaderPartner = () => (
	<div class={style.headerPartner}>
		<Link href="/partner">
			<p class={style.headerPartner_p}>HH</p>
		</Link>
	</div>
);

export default HeaderPartner;
