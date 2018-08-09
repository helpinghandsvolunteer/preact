import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const HeaderPartner = () => (
	<div class={style.headerPartner}>
		<Link href="/partner">
			<p class={style.headerPartner_p}>Helping</p>
			<p class={style.headerPartner_p}>Hands</p>
		</Link>
	</div>
);

export default HeaderPartner;
