import { LitElement, html, customElement, TemplateResult, CSSResult, property } from 'lit-element';
import config, { styles } from '@/scripts/config';
import store from 'store';
import Restaurant from 'models/restaurant';

const restaurantTypes = [
	'casual dining',
	'fast food',
	'fast casual',
	'ethnic',
	'family style',
	'fine dining'
];

@customElement('rz-restaurant-list')
export class rzRestaurantList extends LitElement {
	@property({ type: Object, reflect: true })
	restaurantList!: Array<Restaurant>;

	constructor() {
		super();
		this.restaurantList = [];
	}

	static get styles(): CSSResult {
		return styles.restaurantList;
	}

	render(): TemplateResult {
		return html`<slot>
			${this.restaurantList.map(
				(restaurant) => html`
					<rz-restaurant-card
						.id="${restaurant.id}"
						.image="${config.API.BASE_IMAGE_URL + 'small/' + restaurant.pictureId}"
						.category="${restaurantTypes[
							Math.floor(Math.random() * restaurantTypes.length)
						]}"
						.title="${restaurant.name}"
						.subTitle="${restaurant.city}"
						.description="${restaurant.description}"
						.rating="${restaurant.rating}"
					></rz-restaurant-card>
				`
			)}
		</slot>`;
	}

	connectedCallback(): void {
		super.connectedCallback();

		this.restaurantList = store.state.restaurantList.restaurants;
	}
}
