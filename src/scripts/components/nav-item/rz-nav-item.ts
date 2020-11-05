import { LitElement, html, customElement, TemplateResult, CSSResult, property } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-nav-item')
export class rzNavItem extends LitElement {
	@property({ type: String, reflect: true })
	href!: string;

	@property({ type: Boolean, reflect: true })
	openInNewTab!: boolean;

	static get styles(): CSSResult {
		return styles.navItem;
	}

	render(): TemplateResult {
		return html`<li>
			<a href="${this.href}" target="${this.openInNewTab ? '_blank' : ''}"><slot></slot></a>
		</li>`;
	}
}
