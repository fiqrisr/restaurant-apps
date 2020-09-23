import { LitElement, html, customElement, TemplateResult, CSSResult } from 'lit-element';
import { styles } from '../../config/styles';

@customElement('nav-menu')
export class NavMenu extends LitElement {
	static get styles(): CSSResult {
		return styles.navMenu;
	}

	render(): TemplateResult {
		return html`<slot></slot>`;
	}
}
