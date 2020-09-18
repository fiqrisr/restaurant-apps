import { LitElement, html, property } from 'lit-element';

class AppBar extends LitElement {
	@property({ type: String, reflect: true })
	logo!: string;

	render() {
		return html` <img src="${this.logo}" /> `;
	}

	attributeChangedCallback(name: string, oldval: string, newval: string) {
		super.attributeChangedCallback(name, oldval, newval);
		this.dispatchEvent(new Event(`${name}-changed`));
	}
}

customElements.define('app-bar', AppBar);
