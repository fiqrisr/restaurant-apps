import { LitElement, customElement, TemplateResult, html } from 'lit-element';
import store from 'store';
import { changeSkipToContentLink } from 'utils/skipToContent';

@customElement('favorite-view')
export class FavoriteView extends LitElement {
	render(): TemplateResult {
		return html`<div id="main" class="container">
			<section class="section">
				<h2 class="section-title">Favorites</h2>
				<rz-restaurant-list
					.data="${store.state.restaurantList.restaurants.slice(-6)}"
				></rz-restaurant-list>
			</section>
		</div>`;
	}

	connectedCallback(): void {
		changeSkipToContentLink(document.URL);
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
