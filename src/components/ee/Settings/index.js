import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Settings = () => (
	<div class={style.settings_container}>

		<div class={style.settings_navContainer}>
			<div>Edit profile</div>
			<div>Push Notifications</div>
			<div>Contact info</div>
		</div>

		<div class={style.settings_mainContainer}>
			<div class={style.settings_card}>
				<div>Name</div>
				<div>Vanessa Jo</div>
				<div>Edit</div>
			</div>
		</div>
	</div>
);

export default Settings;
