import { LitElement, customElement, TemplateResult, html, property } from 'lit-element';
import { getRestaurantList } from 'data/restaurant';
import RestaurantList from 'models/restaurant-list';

@customElement('home-view')
export class HomeView extends LitElement {
	@property({ type: Object, reflect: true })
	restaurantList!: RestaurantList;

	constructor() {
		super();
		this.restaurantList = {
			count: 0,
			restaurants: []
		};
	}

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
				${this.restaurantList.count === 0
					? html`<rz-spinner></rz-spinner>`
					: html`<rz-restaurant-list
							.restaurantList="${this.restaurantList.restaurants}"
					  ></rz-restaurant-list>`}
			</section>`;
	}

	connectedCallback(): void {
		super.connectedCallback();

		getRestaurantList().then((response) => {
			this.restaurantList = response;
			this.requestUpdate();
		});
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
