import { LitElement, customElement, CSSResult, TemplateResult, html } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-chip')
export class rzChip extends LitElement {
	static get styles(): CSSResult {
		return styles.chip;
	}

	render(): TemplateResult {
		return html`<slot></slot>`;
	}
}
