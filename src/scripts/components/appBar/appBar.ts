import { LitElement, html, property, customElement, TemplateResult, CSSResult } from 'lit-element';
import { styles } from '../../config/styles';

@customElement('app-bar')
export class AppBar extends LitElement {
	@property({ type: String, reflect: true })
	logo!: string;

	static get styles(): CSSResult {
		return styles.appBar;
	}

	render(): TemplateResult {
		return html` <img src="${this.logo}" alt="RestoZoo brand" class="logo" />
			<slot name="right"></slot>`;
	}

	attributeChangedCallback(name: string, oldval: string, newval: string): void {
		super.attributeChangedCallback(name, oldval, newval);
		this.dispatchEvent(new Event(`${name}-changed`));
	}
}
