import { LitElement, html, customElement, TemplateResult } from 'lit-element';

@customElement('nav-menu')
export class NavMenu extends LitElement {
	render(): TemplateResult {
		return html`<slot></slot>`;
	}
}
