import { LitElement, html, property, customElement, TemplateResult } from 'lit-element';

@customElement('app-bar')
export class AppBar extends LitElement {
	@property({ type: String, reflect: true })
	logo!: string;

	@property({ type: String, reflect: true })
	label!: string;

	render(): TemplateResult {
		return html` <div class="app-bar">
			<div class="app-bar--brand">
				<img src="${this.logo}" alt="RestoZoo brand" class="app-bar--logo" />
				<div class="app-bar--label">${this.label}</div>
			</div>
			<slot name="right"></slot>
		</div>`;
	}

	attributeChangedCallback(name: string, oldval: string, newval: string): void {
		super.attributeChangedCallback(name, oldval, newval);
		this.dispatchEvent(new Event(`${name}-changed`));
	}

	createRenderRoot(): LitElement {
		return this;
	}
}
