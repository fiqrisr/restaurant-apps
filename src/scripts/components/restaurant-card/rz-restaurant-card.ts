import { LitElement, html, customElement, TemplateResult, CSSResult, property } from 'lit-element';
import { styles } from '@/scripts/config';

@customElement('rz-restaurant-card')
export class rzRestaurantCard extends LitElement {
	@property({ type: String, reflect: true })
	id!: string;

	@property({ type: String, reflect: true })
	image!: string;

	@property({ type: String, reflect: true })
	category!: string;

	@property({ type: String, reflect: true })
	title!: string;

	@property({ type: String, reflect: true })
	subTitle!: string;

	@property({ type: String, reflect: true })
	description!: string;

	@property({ type: Number, reflect: true })
	rating!: number;

	static get styles(): CSSResult {
		return styles.restaurantCard;
	}

	render(): TemplateResult {
		return html`
		<a href="/restaurant/${this.id}">
			<div class="thumbnail">
				<div class="rating">
					<div class="icon"><rz-icon icon="star" size="s" color="var(--neutral-2)"></rz-icon></div>
					<div class="rating-value">${this.rating}</div>
				</div>
				<img src="${this.image}" alt="${this.title}"/>
				<div class="category">${this.category}</div>
			</div>

			<div class="content">
				<h3 class="title">${this.title}</h1>
				<h4 class="sub-title">${this.subTitle}</h2>
				<p class="description">${this.description}</p>
			</div>
			</a>
		`;
	}
}
