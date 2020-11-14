import { LitElement, html, customElement, TemplateResult, CSSResult } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-spinner')
export class rzSpinner extends LitElement {
	static get styles(): CSSResult {
		return styles.spinner;
	}

	render(): TemplateResult {
		return html`<div class="spinner">
			<div class="double-bounce1"></div>
			<div class="double-bounce2"></div>
		</div>`;
	}
}
