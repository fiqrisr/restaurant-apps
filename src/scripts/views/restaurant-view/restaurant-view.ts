import { LitElement, customElement, TemplateResult, html } from 'lit-element';
import router from 'router';
import store from 'store';
import config from '@/scripts/config';

@customElement('restaurant-view')
export class RestaurantView extends LitElement {
	render(): TemplateResult {
		return html`
			${store.state.loading
				? html`<rz-spinner></rz-spinner>`
				: html`<div class="container restaurant__page">
						<div class="restaurant__images">
							<img
								class="restaurant__images--big"
								src="${config.API.BASE_IMAGE_URL +
								'large/' +
								store.state.currentRestaurantData.pictureId}"
							/>
						</div>
				  </div>`}
		`;
	}

	connectedCallback(): void {
		super.connectedCallback();
		store.events.subscribe('stateChange', () => this.requestUpdate());
		store.dispatch('getRestaurantData', router.location.params.id);
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
