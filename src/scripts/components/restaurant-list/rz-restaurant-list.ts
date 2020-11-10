import { LitElement, html, customElement, TemplateResult, CSSResult } from 'lit-element';
import { styles } from '@/scripts/config';
import { restaurants } from '@/scripts/data/restaurant';
// import { rzRestaurantCard } from 'components/restaurant-card';

@customElement('rz-restaurant-list')
export class rzRestaurantList extends LitElement {
	static get styles(): CSSResult {
		return styles.restaurantList;
	}

	render(): TemplateResult {
		return html`<slot>
			${restaurants.map(
				(restaurant) => html`
					<rz-restaurant-card
						.id="${restaurant.id}"
						.image="${restaurant.pictureId}"
						.title="${restaurant.name}"
						.subTitle="${restaurant.city}"
						.description="${this.truncateText(restaurant.description, 150)}"
						.rating="${restaurant.rating}"
					></rz-restaurant-card>
				`
			)}
		</slot>`;
	}

	attributeChangedCallback(name: string, oldval: string, newval: string): void {
		super.attributeChangedCallback(name, oldval, newval);
	}

	truncateText(text: string, maxLength: number): string {
		return text.length >= maxLength ? text.substring(0, maxLength - 3) + '...' : text;
	}
}
