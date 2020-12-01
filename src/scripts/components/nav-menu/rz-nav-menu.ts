import { LitElement, html, customElement, TemplateResult, CSSResult, property } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-nav-menu')
export class rzNavMenu extends LitElement {
	@property({ type: Number, reflect: true })
	listCount = 0;

	navButton!: HTMLElement;
	navList!: HTMLElement;

	static get styles(): CSSResult {
		return styles.navMenu;
	}

	render(): TemplateResult {
		return html`<nav>
			<button class="hamburger" type="button" aria-label="Menu" @click="${this.toggleNav}">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
			<ul>
				${[...Array(this.listCount).keys()].map((num) => {
					return html`<li><slot name=${num} @click="${this.closeNav}"></slot></li>`;
				})}
			</ul>
			<div @click="${this.toggleNav}" class="overlay"></div>
		</nav>`;
	}

	firstUpdated(): void {
		this.navList = <HTMLElement>this.shadowRoot?.querySelector('ul');
		this.navButton = <HTMLElement>this.shadowRoot?.querySelector('button');
	}

	toggleNav(): void {
		this.navButton.classList.toggle('active');
		this.navList.classList.toggle('opened');
		document.body.style.height = document.body.style.height === '' ? '100%' : '';
		document.body.style.overflow = document.body.style.overflow === '' ? 'hidden' : '';
	}

	closeNav(): void {
		if (this.navList.classList.contains('opened')) this.toggleNav();
	}
}
