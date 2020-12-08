import { LitElement, customElement, TemplateResult, html } from 'lit-element';

@customElement('not-found-view')
export class NotFoundView extends LitElement {
	render(): TemplateResult {
		return html`<section id="main" class="container section">
			<div class="bg-text">404 Not Found</div>
		</section>`;
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
