import { CSSResult, customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import config, { styles } from '@/scripts/config';

@customElement('rz-review-card')
export class rzReviewCard extends LitElement {
	@property({ type: String, reflect: true })
	name!: string;

	@property({ type: String, reflect: true })
	date!: string;

	@property({ type: String, reflect: true })
	review!: string;

	static get styles(): CSSResult {
		return styles.reviewCard;
	}

	render(): TemplateResult {
		return html`
			<div class="avatar">
				<img src="${config.DEFAULT_AVATAR}" />
			</div>
			<div class="review">
				<rz-text>${this.name}</rz-text>
				<rz-text>${this.date}</rz-text>
				<rz-text>${this.review}</rz-text>
			</div>
		`;
	}
}
