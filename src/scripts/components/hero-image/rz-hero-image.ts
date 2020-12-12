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

	@property({ type: String, reflect: true })
	fallbackImage!: string;

	static get styles(): CSSResultArray {
		return [styles.shared, styles.heroImage];
	}

	render(): TemplateResult {
		return html` <div class="hero-container">
			<picture>
				<source class="hero-image" srcset="${this.image}" />
				${this.fallbackImage !== undefined
					? html` <source class="hero-image" srcset="${this.fallbackImage}" /> `
					: html``}
				<img class="hero-image" src="${this.image}" alt="Restaurant" />
			</picture>
			<div class="overlay"></div>
			<div class="hero-text">
				<slot name="title"></slot>
				<slot name="tagline"></slot>
				<slot></slot>
			</div>
			<div class="container"><slot name="full"></slot></div>
		</div>`;
	}

	firstUpdated(): void {
		const heroContainer = <HTMLElement>this.shadowRoot?.querySelector('.hero-container');
		heroContainer.style.height = this.height;
		const overlay = <HTMLElement>this.shadowRoot?.querySelector('.overlay');
		overlay.style.backgroundImage = `var(--${this.gradient})`;

		this.requestUpdate();
	}
}
