import { customElement, LitElement, html, TemplateResult, property } from 'lit-element';
import store from 'store';

@customElement('add-review-form')
export class AddReviewForm extends LitElement {
	@property({ type: String, reflect: true })
	id!: string;

	@property({ type: String, reflect: true })
	name!: string | undefined;

	@property({ type: String, reflect: true })
	review!: string | undefined;

	render(): TemplateResult {
		return html`<form method="POST">
			<input type="text" class="review-input" name="name" id="name" placeholder="Your name" />
			<textarea
				class="review-input"
				name="review"
				id="review"
				placeholder="This restaurant is awesome!"
			></textarea>
			<rz-button label="Add Review" @click=${this.addReview}></rz-button>
		</form>`;
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}

	getInput(): void {
		const inputEl = <HTMLInputElement>document.getElementById('name');
		const reviewEl = <HTMLInputElement>document.getElementById('review');

		this.name = inputEl.value;
		this.review = reviewEl.value;
	}

	addReview(): void {
		this.getInput();

		if (this.name === undefined || this.review === undefined) console.log('Input empty');
		else {
			store.dispatch('addReview', {
				id: this.id,
				name: this.name,
				review: this.review
			});
		}
	}

	connectedCallback(): void {
		super.connectedCallback();
		store.events.subscribe('stateChange', () => this.requestUpdate());
	}
}
