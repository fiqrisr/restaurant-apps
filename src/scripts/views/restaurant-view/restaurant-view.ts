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
				: html`<rz-hero-image
						image="${config.API.BASE_IMAGE_URL +
						'large/' +
						store.state.currentRestaurantData.pictureId}"
						gradient="gradient-2"
						height="400px"
				  >
						<rz-restaurant-header
							slot="full"
							.title=${store.state.currentRestaurantData.name}
							.address=${store.state.currentRestaurantData.address +
							', ' +
							store.state.currentRestaurantData.city}
						></rz-restaurant-header>
				  </rz-hero-image>`}
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
