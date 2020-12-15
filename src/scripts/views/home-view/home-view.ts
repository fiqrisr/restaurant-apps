import { LitElement, customElement, TemplateResult, html } from 'lit-element';
import store from 'store';

import hero_300 from '../../../public/images/hero/hero-image_m9m7xi_c_scale,w_300.jpg';
import hero_485 from '../../../public/images/hero/hero-image_m9m7xi_c_scale,w_485.jpg';
import hero_640 from '../../../public/images/hero/hero-image_m9m7xi_c_scale,w_640.jpg';
import hero_764 from '../../../public/images/hero/hero-image_m9m7xi_c_scale,w_764.jpg';
import hero_885 from '../../../public/images/hero/hero-image_m9m7xi_c_scale,w_885.jpg';
import hero_1021 from '../../../public/images/hero/hero-image_m9m7xi_c_scale,w_1021.jpg';
import hero_1139 from '../../../public/images/hero/hero-image_m9m7xi_c_scale,w_1139.jpg';
import hero_1275 from '../../../public/images/hero/hero-image_m9m7xi_c_scale,w_1275.jpg';
import hero_1350 from '../../../public/images/hero/hero-image_m9m7xi_c_scale,w_1350.jpg';

const responsiveImages: Array<{ url: string; width: number }> = [
	{
		url: hero_300,
		width: 300
	},
	{
		url: hero_485,
		width: 485
	},
	{
		url: hero_640,
		width: 640
	},
	{
		url: hero_764,
		width: 764
	},
	{
		url: hero_885,
		width: 885
	},
	{
		url: hero_1021,
		width: 1021
	},
	{
		url: hero_1139,
		width: 1139
	},
	{
		url: hero_1275,
		width: 1275
	},
	{
		url: hero_1350,
		width: 1350
	}
];

@customElement('home-view')
export class HomeView extends LitElement {
	render(): TemplateResult {
		return html` <rz-hero-image
				image="${hero_1350}"
				.responsiveImages=${responsiveImages}
				maxWidth="1350px"
				gradient="gradient-1"
				height="500px"
			>
				<h1 slot="title">Find Your Favorite Restaurant</h1>
				<p slot="tagline">The only thing we’re serious about is food.</p>
				<div style="margin-top: 40px;">
					<rz-button label="Let's Eat!" isLink href="#main"></rz-button>
				</div>
			</rz-hero-image>

			<div id="main" class="container">
				<section class="section">
					<h2 class="section-title">Explore Restaurant</h2>
					${store.state.loading
						? html`<rz-spinner></rz-spinner>`
						: html`<rz-restaurant-list
								.data="${store.state.restaurantList.restaurants}"
						  ></rz-restaurant-list>`}
				</section>
			</div>`;
	}

	connectedCallback(): void {
		super.connectedCallback();
		store.events.subscribe('stateChange', () => this.requestUpdate());
		store.dispatch('getRestaurantList');
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
