import { LitElement, html, customElement, TemplateResult, CSSResult, property } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-nav-menu')
export class rzNavMenu extends LitElement {
	@property({ type: Boolean, reflect: true })
	mobile = true;

	static get styles(): CSSResult {
		return styles.navMenu;
	}

	render(): TemplateResult {
		return html`${this.mobile
			? html``
			: html`<nav>
					<ul>
						<slot></slot>
					</ul>
			  </nav>`}`;
	}
}
