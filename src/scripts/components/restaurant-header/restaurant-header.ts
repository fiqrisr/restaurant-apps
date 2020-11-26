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

	static get styles(): CSSResult {
		return styles.restaurantHeader;
	}

	render(): TemplateResult {
		return html`<h1>${this.title}</h1>
			<rz-text color="var(--neutral-2)" size="body-1">${this.address}</rz-text>`;
	}
}
