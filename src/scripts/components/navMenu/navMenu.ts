import { LitElement, html, customElement, TemplateResult, CSSResultArray } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('nav-menu')
export class NavMenu extends LitElement {
	static get styles(): CSSResultArray {
		return [styles.shared, styles.navMenu];
	}

	render(): TemplateResult {
		return html`<ul>
			<slot></slot>
		</ul>`;
	}
}
