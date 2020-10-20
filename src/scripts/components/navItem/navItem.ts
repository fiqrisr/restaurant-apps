import { LitElement, html, customElement, TemplateResult } from 'lit-element';

@customElement('nav-item')
export class NavItem extends LitElement {
	render(): TemplateResult {
		return html`<slot></slot>`;
	}
}
