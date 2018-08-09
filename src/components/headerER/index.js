import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const HeaderER = () => (
	<div class={style.headerER}>
		<Link href="/employer">
			<p class={style.headerER_p}>HH</p>
		</Link>
	</div>
);

export default HeaderER;
