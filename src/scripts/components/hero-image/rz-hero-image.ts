import {
	LitElement,
	html,
	customElement,
	TemplateResult,
	property,
	CSSResultArray
} from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-hero-image')
export class rzHeroImage extends LitElement {
	@property({ type: String, reflect: true })
	image!: string;

	@property({ type: String, reflect: true })
	gradient!: string;

	@property({ type: String, reflect: true })
	height!: string;

	static get styles(): CSSResultArray {
		return [styles.shared, styles.heroImage];
	}

	render(): TemplateResult {
		return html` <div class="hero-image">
			<div class="hero-text">
				<slot name="title"></slot>
				<slot name="tagline"></slot>
				<slot></slot>
			</div>
			<div class="container"><slot name="full"></slot></div>
		</div>`;
	}

	firstUpdated(): void {
		const heroImage = <HTMLElement>this.shadowRoot?.querySelector('.hero-image');
		heroImage.style.backgroundImage = `var(--${this.gradient}),url("${this.image}")`;
		heroImage.style.height = this.height;
	}
}
