import { LitElement, customElement, TemplateResult, html } from 'lit-element';

@customElement('favorite-view')
export class FavoriteView extends LitElement {
	render(): TemplateResult {
		return html`<section id="main" class="container section">
			<h2 class="section-title">Favorites</h2>
		</section>`;
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
