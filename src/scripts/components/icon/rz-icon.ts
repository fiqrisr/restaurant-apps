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

	attributeChangedCallback(name: string, oldval: string, newval: string): void {
		super.attributeChangedCallback(name, oldval, newval);

		if (name == 'color') this.style.color = this.color;
		else if (name == 'icon' && newval.indexOf('url') > -1) this.handleIcon(newval);
	}

	private handleIcon(val: string): void {
		this.style.backgroundImage = val;
	}
}
