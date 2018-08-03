import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<p class={style.homeTest}>Test Me Out</p>
	</div>
);

export default Home;
