import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const HeaderER = () => (
	<div class={style.headerER}>
		<Link href="/">
			<p class={style.headerER_p}>Helping</p>
			<p class={style.headerER_p}>Hands</p>
		</Link>
	</div>
);

export default HeaderER;
