import { customElement, LitElement, html, TemplateResult } from 'lit-element';
import store from 'store';

@customElement('review-list')
export class ReviewList extends LitElement {
	render(): TemplateResult {
		return html`${store.state.currentRestaurantData.customerReviews
			.slice(-4)
			.map((review: { name: string; date: string; review: string }) => {
				return html`<rz-review-card
					tabindex="0"
					.name=${review.name}
					.date=${review.date}
					.review=${review.review}
				></rz-review-card>`;
			})}`;
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}

	connectedCallback(): void {
		super.connectedCallback();
		store.events.subscribe('stateChange', () => this.requestUpdate());
	}
}
