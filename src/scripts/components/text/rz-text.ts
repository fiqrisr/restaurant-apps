import { LitElement, html, customElement, TemplateResult, CSSResult, property } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-text')
export class rzText extends LitElement {
	@property({ type: String, reflect: true })
	size = 'body-1';

	@property({ type: String, reflect: true })
	color!: string;

	static get styles(): CSSResult {
		return styles.text;
	}

	render(): TemplateResult {
		return html`<slot></slot>`;
	}

	attributeChangedCallback(name: string, oldval: string, newval: string): void {
		super.attributeChangedCallback(name, oldval, newval);

		if (name == 'color') {
			this.style.color = this.color;
		}
	}
}
