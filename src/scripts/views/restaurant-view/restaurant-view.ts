import { LitElement, customElement, TemplateResult, html } from 'lit-element';
import router from 'router';

@customElement('restaurant-view')
export class RestaurantView extends LitElement {
	render(): TemplateResult {
		return html`<section id="main" class="container section">
			<h2 class="section-title">${router.location.params.id}</h2>
		</section>`;
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
