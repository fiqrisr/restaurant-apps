import { LitElement, html, customElement, TemplateResult, CSSResult, property } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-restaurant-header')
export class rzRestaurantHeader extends LitElement {
	@property({ type: String, reflect: true })
	title!: string;

	@property({ type: String, reflect: true })
	address!: string;

	@property({ type: Number, reflect: true })
	rating!: number;

	@property({ type: Boolean, reflect: true })
	isBookmarked = false;

	static get styles(): CSSResult {
		return styles.restaurantHeader;
	}

	render(): TemplateResult {
		return html`<h1>${this.title}</h1>
			<div class="address">
				<rz-icon icon="location" size="m" color="white" class="icon"></rz-icon>
				<rz-text color="white" size="body-1">${this.address}</rz-text>
			</div>
			<div class="second-line">
				<div class="rating">
					<rz-icon icon="star" size="m" color="white" class="icon"></rz-icon>
					<rz-text color="white" size="body-1">${this.rating}</rz-text>
				</div>
				<div class="bookmark" @click=${this.toggleBookmark}>
					<rz-icon
						icon=${this.isBookmarked ? 'bookmark' : 'bookmark-empty'}
						size="m"
						color="white"
						class="icon"
					></rz-icon>
					<rz-text color="white" size="body-1">Add to Favorite</rz-text>
				</div>
			</div>`;
	}

	toggleBookmark(): void {
		this.isBookmarked = !this.isBookmarked;
		this.requestUpdate();
	}
}
