import { LitElement, customElement, TemplateResult, html } from 'lit-element';

@customElement('not-found-view')
export class NotFoundView extends LitElement {
	render(): TemplateResult {
		return html`<section id="main" class="container section">
			<h2 class="section-title">404 Not Found</h2>
		</section>`;
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
