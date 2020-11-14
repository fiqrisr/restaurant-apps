import { LitElement, customElement, TemplateResult, html, property } from 'lit-element';
import router from 'router';
import { getRestaurantData } from 'data/restaurant';
import Restaurant from 'models/restaurant';

@customElement('restaurant-view')
export class RestaurantView extends LitElement {
	@property({ type: Object, reflect: true })
	restaurantData: Restaurant;

	constructor() {
		super();
		this.restaurantData = {
			id: '',
			name: '',
			description: '',
			pictureId: 0,
			city: '',
			rating: 0,
			categories: [],
			menus: {
				foods: [],
				drinks: []
			},
			customerReviews: []
		};
	}

	render(): TemplateResult {
		return html`<section id="main" class="container section">
			${this.restaurantData.name === ''
				? html`<rz-spinner></rz-spinner>`
				: html`<h1 class="page-title">${this.restaurantData.name}</h1>`}
		</section>`;
	}

	connectedCallback(): void {
		super.connectedCallback();

		getRestaurantData(router.location.params.id as string).then((response) => {
			this.restaurantData = response;
			this.requestUpdate();
		});
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
