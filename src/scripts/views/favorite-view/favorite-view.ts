import { LitElement, customElement, TemplateResult, html } from 'lit-element';
import store from 'store';
import { changeSkipToContentLink } from 'utils/skipToContent';

@customElement('favorite-view')
export class FavoriteView extends LitElement {
	render(): TemplateResult {
		return html`<div id="main" class="container">
			<section class="section">
				<h2 class="section-title">Favorites</h2>
				${store.state.loading
					? html`<rz-spinner></rz-spinner>`
					: html`${store.state.favorites.length > 0
							? html`<rz-restaurant-list
									.data=${store.state.favorites}
							  ></rz-restaurant-list>`
							: html`<div class="bg-text">Empty Bookmark</div>`}`}
			</section>
		</div>`;
	}

	connectedCallback(): void {
		super.connectedCallback();
		store.events.subscribe('stateChange', () => this.requestUpdate());
		store.dispatch('getFavorites');
	}

	firstUpdated(): void {
		changeSkipToContentLink(document.URL);
		this.requestUpdate();
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
