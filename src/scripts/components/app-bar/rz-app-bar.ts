import { LitElement, html, property, customElement, TemplateResult, CSSResult } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-app-bar')
export class rzAppBar extends LitElement {
	@property({ type: String, reflect: true })
	logo!: string;

	@property({ type: String, reflect: true })
	label!: string;

	@property({ type: Boolean })
	fixed = false;

	static get styles(): CSSResult {
		return styles.appBar;
	}

	render(): TemplateResult {
		return html`
			<div class="app-bar">
				<div class="brand">
					<img src="${this.logo}" alt="${this.label} brand" class="logo" />
					<div class="label">
						<a href="#">${this.label}</a>
					</div>
				</div>
				<slot name="right"></slot>
			</div>
		`;
	}

	connectedCallback(): void {
		super.connectedCallback();
		this.style.position = this.fixed ? 'fixed' : 'relative';
	}
}
