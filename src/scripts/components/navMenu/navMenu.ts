import { LitElement, html, customElement, TemplateResult } from 'lit-element';
import '../../../styles/components/navMenu.scss';

@customElement('nav-menu')
export class NavMenu extends LitElement {
	render(): TemplateResult {
		return html`<slot></slot>`;
	}

	createRenderRoot(): LitElement {
		return this;
	}
}
