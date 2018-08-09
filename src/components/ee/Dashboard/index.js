import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Dashboard = () => (
	<div class={style.eedash_container}>
    <div class={style.dash_innerContainer}>
      <div class={style.event}>
        <h3>Event Title</h3>
        <p>Event description</p>
      </div>

      <div class={style.event}>
        <h3>Event Title</h3>
        <p>Event description</p>
      </div>

      <div class={style.event}>
        <h3>Event Title</h3>
        <p>Event description</p>
      </div>

      <div class={style.event}>
        <h3>Event Title</h3>
        <p>Event description</p>
      </div>

      <div class={style.event}>
        <h3>Event Title</h3>
        <p>Event description</p>
      </div>

      <div class={style.data}>
        <h3>Dashboard data</h3>
      </div>

    </div>
    <div class={style.dash_adContainer}>
      <div class={style.ad_vert}>
        <h3>Ad Copy</h3>
        <p>Buy Snackie Smores</p>
      </div>
    </div>

	</div>
);

export default Dashboard;
