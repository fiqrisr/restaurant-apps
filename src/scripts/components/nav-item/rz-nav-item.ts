import { LitElement, html, customElement, TemplateResult, CSSResult, property } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-nav-item')
export class rzNavItem extends LitElement {
	@property({ type: String, reflect: true })
	href!: string;

	@property({ type: Boolean, reflect: true })
	newTab!: boolean;

	static get styles(): CSSResult {
		return styles.navItem;
	}

	render(): TemplateResult {
		return html`<li>
			${this.newTab
				? html`<a href="${this.href}" target="_blank" rel="noopener"><slot></slot></a>`
				: html`<a href="${this.href}"><slot></slot></a>`}
		</li>`;
	}
}
