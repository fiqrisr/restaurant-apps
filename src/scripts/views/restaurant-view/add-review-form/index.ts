import { customElement, LitElement, html, TemplateResult } from 'lit-element';
import store from 'store';

@customElement('add-review-form')
export class AddReviewForm extends LitElement {
	render(): TemplateResult {
		return html`<form method="POST">
			<input type="text" class="review-input" name="name" placeholder="Your name" />
			<textarea
				class="review-input"
				name="review"
				placeholder="This restaurant is awesome!"
			></textarea>
			<rz-button submit label="Add Review"></rz-button>
		</form>`;
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
