import { LitElement, html, customElement, TemplateResult } from 'lit-element';
import '../../../styles/components/navItem.scss';

@customElement('nav-item')
export class NavItem extends LitElement {
	render(): TemplateResult {
		return html`<slot></slot>`;
	}

	createRenderRoot(): LitElement {
		return this;
	}
}
