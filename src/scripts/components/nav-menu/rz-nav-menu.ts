import { LitElement, html, customElement, TemplateResult, CSSResult } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-nav-menu')
export class rzNavMenu extends LitElement {
	static get styles(): CSSResult {
		return styles.navMenu;
	}

	render(): TemplateResult {
		return html`<nav>
			<button @click="${this.openNav}"><rz-icon icon="menu" size="l"></rz-icon></button>
			<ul>
				<slot @click="${this.closeNav}"></slot>
			</ul>
			<div @click="${this.closeNav}" class="overlay"></div>
		</nav>`;
	}

	openNav(): void {
		const overlay = <HTMLElement>(
			document.querySelector('rz-nav-menu')?.shadowRoot?.querySelector('.overlay')
		);

		overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';

		document
			.querySelector('rz-nav-menu')
			?.shadowRoot?.querySelector('ul')
			?.classList.toggle('opened');

		document.body.style.height = '100%';
		document.body.style.overflow = 'hidden';
	}

	closeNav(): void {
		const overlay = <HTMLElement>(
			document.querySelector('rz-nav-menu')?.shadowRoot?.querySelector('.overlay')
		);

		overlay.style.display = 'none';

		document
			.querySelector('rz-nav-menu')
			?.shadowRoot?.querySelector('ul')
			?.classList.remove('opened');

		document.body.style.height = '';
		document.body.style.overflow = '';
	}
}
