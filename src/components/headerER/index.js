import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const HeaderER = () => (
	<div class={style.headerER}>
		<Link href="/employer">
			<h1>HH</h1>
		</Link>
	</div>
);

export default HeaderER;
