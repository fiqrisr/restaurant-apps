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
		return html` <div class="hero-image">
			${this.fallbackImage !== undefined
				? html`<picture style="display:none;">
						<source srcset="${this.image}" />
						<source srcset="${this.fallbackImage}" />
						<img src="${this.fallbackImage}" />
				  </picture>`
				: html``}

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
		heroImage.style.height = this.height;

		if (this.fallbackImage !== undefined) {
			const pictureEl = <HTMLElement>this.shadowRoot?.querySelector('picture');

			if (pictureEl.getElementsByTagName('img')[0].src !== undefined) {
				heroImage.style.backgroundImage = `var(--${
					this.gradient
				}),url("${pictureEl.getElementsByTagName('img')[0].src.toString()}")`;
			} else {
				heroImage.style.backgroundImage = `var(--${this.gradient}),url("${this.image}")`;
			}
		} else {
			heroImage.style.backgroundImage = `var(--${this.gradient}),url("${this.image}")`;
		}

		this.requestUpdate();
	}
}
