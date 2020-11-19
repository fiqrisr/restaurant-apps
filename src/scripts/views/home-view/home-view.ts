import { LitElement, customElement, TemplateResult, html } from 'lit-element';
import store from 'store';

@customElement('home-view')
export class HomeView extends LitElement {
	render(): TemplateResult {
		return html` <rz-hero-image image="../public/images/heros/hero-image.jpg">
				<h1 slot="title">Find Your Favorite Restaurant</h1>
				<p slot="tagline">The only thing we’re serious about is food.</p>
				<div style="margin-top: 40px;">
					<rz-button label="Let's Eat!" isLink href="#main"></rz-button>
				</div>
			</rz-hero-image>

			<section id="main" class="container section">
				<h2 class="section-title">Explore Restaurant</h2>
				${store.state.loading
					? html`<rz-spinner></rz-spinner>`
					: html`<rz-restaurant-list
							.restaurantList="${store.state.restaurantList.restaurants}"
					  ></rz-restaurant-list>`}
			</section>`;
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
