import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const HeaderPartner = () => (
	<div class={style.headerPartner}>
		<Link href="/partner">
			<h1>HH</h1>
		</Link>
	</div>
);

export default HeaderPartner;
