import { LitElement, html, customElement, TemplateResult, CSSResult } from 'lit-element';
import { styles } from '../../config/styles';

@customElement('nav-item')
export class NavItem extends LitElement {
	static get styles(): CSSResult {
		return styles.navItem;
	}

	render(): TemplateResult {
		return html`<slot></slot>`;
	}
}
