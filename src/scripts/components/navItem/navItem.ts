import {
	LitElement,
	html,
	customElement,
	TemplateResult,
	CSSResultArray,
	property
} from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('nav-item')
export class NavItem extends LitElement {
	@property({ type: String, reflect: true })
	href!: string;

	@property({ type: String, reflect: true })
	title!: string;

	static get styles(): CSSResultArray {
		return [styles.shared, styles.navItem];
	}

	render(): TemplateResult {
		return html`<li><a href="${this.href}">${this.title}</a></li>`;
	}
}
