import { LitElement, customElement, TemplateResult, html } from 'lit-element';
import store from 'store';

@customElement('favorite-view')
export class FavoriteView extends LitElement {
	render(): TemplateResult {
		return html`<section id="main" class="container section">
			<h2 class="section-title">Favorites</h2>
			${store.state.items.map((item: string) => html`<p>${item}</p>`)}
		</section>`;
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
