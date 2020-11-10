import { LitElement, html, customElement, TemplateResult, CSSResult, property } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-button')
export class rzButton extends LitElement {
	@property({ type: String, reflect: true })
	label!: string;

	@property({ type: Boolean, reflect: true })
	isLink = false;

	@property({ type: String, reflect: true })
	href!: string;

	static get styles(): CSSResult {
		return styles.button;
	}

	render(): TemplateResult {
		return html`<button>
			${this.isLink ? html` <a href="${this.href}">${this.label}</a> ` : html`${this.label}`}
		</button>`;
	}
}
