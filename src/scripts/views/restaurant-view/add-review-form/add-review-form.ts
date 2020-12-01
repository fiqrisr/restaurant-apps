import { customElement, LitElement, html, TemplateResult, property } from 'lit-element';
import store from 'store';
import Snackbar from 'node-snackbar';

@customElement('add-review-form')
export class AddReviewForm extends LitElement {
	@property({ type: String, reflect: true })
	id!: string;

	render(): TemplateResult {
		return html`<form method="POST">
			<input
				type="text"
				class="review-input"
				name="name"
				id="name"
				placeholder="Your name"
				required
			/>
			<textarea
				class="review-input"
				name="review"
				id="review"
				placeholder="This restaurant is awesome!"
				required
			></textarea>
			<rz-button label="Add Review" @click=${this.addReview}></rz-button>
		</form>`;
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}

	connectedCallback(): void {
		super.connectedCallback();
		store.events.subscribe('stateChange', () => this.requestUpdate());
	}

	getInput(): { name: HTMLInputElement; review: HTMLInputElement } {
		return {
			name: <HTMLInputElement>document.getElementById('name'),
			review: <HTMLInputElement>document.getElementById('review')
		};
	}

	addReview(): void {
		const { name, review } = this.getInput();

		if (name.value === '' && review.value === '')
			Snackbar.show({
				pos: 'bottom-center',
				duration: 4000,
				text: 'Name and review required'
			});
		else if (name.value === '')
			Snackbar.show({ pos: 'bottom-center', duration: 4000, text: 'Name required' });
		else if (review.value === '')
			Snackbar.show({ pos: 'bottom-center', duration: 4000, text: 'Review required' });
		else {
			store.dispatch('addReview', {
				id: this.id,
				name: name.value,
				review: review.value
			});

			name.value = '';
			review.value = '';

			Snackbar.show({ pos: 'bottom-center', duration: 4000, text: 'Submit review success' });
		}
	}
}
