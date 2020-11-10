import {
	LitElement,
	html,
	property,
	customElement,
	TemplateResult,
	CSSResultArray
} from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-app-bar')
export class rzAppBar extends LitElement {
	@property({ type: String, reflect: true })
	logo!: string;

	@property({ type: String, reflect: true })
	label!: string;

	static get styles(): CSSResultArray {
		return [styles.shared, styles.appBar];
	}

	render(): TemplateResult {
		return html`
			<div class="container app-bar">
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

	attributeChangedCallback(name: string, oldval: string, newval: string): void {
		super.attributeChangedCallback(name, oldval, newval);
		this.dispatchEvent(new Event(`${name}-changed`));
	}
}
