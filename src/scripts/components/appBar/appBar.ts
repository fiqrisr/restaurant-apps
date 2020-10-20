import { LitElement, html, property, customElement, TemplateResult, CSSResult } from 'lit-element';
import { styles } from '../../config/styles';

@customElement('app-bar')
export class AppBar extends LitElement {
	@property({ type: String, reflect: true })
	logo!: string;

	@property({ type: String, reflect: true })
	label!: string;

	static get styles(): CSSResult {
		return styles.appBar;
	}

	render(): TemplateResult {
		return html`
			<div class="brand">
				<img src="${this.logo}" alt="RestoZoo brand" class="logo" />
				<div class="label">${this.label}</div>
			</div>
			<slot name="right"></slot>
		`;
	}

	attributeChangedCallback(name: string, oldval: string, newval: string): void {
		super.attributeChangedCallback(name, oldval, newval);
		this.dispatchEvent(new Event(`${name}-changed`));
	}
}
