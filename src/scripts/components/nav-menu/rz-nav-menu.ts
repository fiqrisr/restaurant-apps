import { LitElement, html, customElement, TemplateResult, CSSResult } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-nav-menu')
export class rzNavMenu extends LitElement {
	static get styles(): CSSResult {
		return styles.navMenu;
	}

	render(): TemplateResult {
		return html`<nav>
			<button
				class="hamburger"
				type="button"
				aria-label="Menu"
				aria-controls="navigation"
				@click="${this.toggleNav}"
			>
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
			<ul>
				<slot @click="${this.toggleNav}"></slot>
			</ul>
			<div @click="${this.toggleNav}" class="overlay"></div>
		</nav>`;
	}

	animateMenuButton(): void {
		const button = <HTMLElement>(
			document.querySelector('rz-nav-menu')?.shadowRoot?.querySelector('button')
		);

		button.classList.toggle('active');
	}

	toggleNav(): void {
		this.animateMenuButton();

		const navList = <HTMLElement>(
			document.querySelector('rz-nav-menu')?.shadowRoot?.querySelector('ul')
		);

		navList.style.visibility = navList.style.visibility === 'visible' ? 'hidden' : 'visible';

		const overlay = <HTMLElement>(
			document.querySelector('rz-nav-menu')?.shadowRoot?.querySelector('.overlay')
		);

		overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';

		document
			.querySelector('rz-nav-menu')
			?.shadowRoot?.querySelector('ul')
			?.classList.toggle('opened');

		document.body.style.height = document.body.style.height === '' ? '100%' : '';
		document.body.style.overflow = document.body.style.overflow === '' ? 'hidden' : '';
	}
}
