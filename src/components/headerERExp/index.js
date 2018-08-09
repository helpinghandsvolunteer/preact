import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const HeaderEE = () => (
	<div class={style.headerEE}>
		<Link href="/">
			<p class={style.headerEE_p}>Helping</p>
			<p class={style.headerEE_p}>Hands</p>
		</Link>
	</div>
);

export default HeaderEE;
