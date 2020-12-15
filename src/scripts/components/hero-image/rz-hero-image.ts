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
	maxWidth!: string;
	@property({ type: Array, reflect: true })
	responsiveImages!: Array<{ url: string; width: number }>;

	static get styles(): CSSResultArray {
		return [styles.shared, styles.heroImage];
	}

	render(): TemplateResult {
		return html` <div class="hero-container">
			<picture>
				${this.responsiveImages !== undefined
					? html`<img
							class="hero-image"
							sizes="(max-width: ${this.maxWidth}) 100vw, ${this.maxWidth}"
							srcset="
								${this.responsiveImages.map(
									(image) => `${image.url} ${image.width}w,`
								)}
							"
							src="${this.image}"
							alt="Restaurant"
					  />`
					: html`<img
							class="hero-image"
							sizes="(max-width: ${this.maxWidth}) 100vw, ${this.maxWidth}"
							src="${this.image}"
							alt="Restaurant"
					  />`}
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
