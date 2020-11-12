import { LitElement, html, customElement, TemplateResult, CSSResult, property } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-hero-image')
export class rzHeroImage extends LitElement {
	@property({ type: String, reflect: true })
	image!: string;

	static get styles(): CSSResult {
		return styles.heroImage;
	}

	render(): TemplateResult {
		return html` <div class="hero-image">
			<div class="hero-text">
				<slot name="title"></slot>
				<slot name="tagline"></slot>
				<slot></slot>
			</div>
		</div>`;
	}

	firstUpdated(): void {
		const hero = <HTMLElement>this.shadowRoot?.querySelector('.hero-image');
		hero.style.backgroundImage = `var(--gradient-1),url("${this.image}")`;
	}
}
