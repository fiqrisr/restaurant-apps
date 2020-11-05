import { LitElement, customElement, CSSResult, property, TemplateResult, html } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-icon')
export class rzIcon extends LitElement {
	@property({ type: String, reflect: true })
	icon!: string;

	@property({ type: String, reflect: true })
	size = 'm';

	@property({ type: String, reflect: true })
	color!: string;

	@property({ type: Boolean, reflect: true })
	button = false;

	@property({ type: Boolean, reflect: true })
	disabled = false;

	static get styles(): CSSResult {
		return styles.icon;
	}

	render(): TemplateResult {
		return html``;
	}
}
