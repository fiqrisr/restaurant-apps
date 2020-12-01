import { LitElement, customElement, TemplateResult, html } from 'lit-element';
import router from 'router';
import store from 'store';
import config from '@/scripts/config';
import { changeSkipToContentLink } from 'utils/skipToContent';

@customElement('restaurant-view')
export class RestaurantView extends LitElement {
	render(): TemplateResult {
		return html`
			${store.state.loading
				? html`<rz-spinner></rz-spinner>`
				: html`<rz-hero-image
							image="${config.API.BASE_IMAGE_URL +
							'large/' +
							store.state.currentRestaurantData.pictureId}"
							gradient="gradient-2"
							height="400px"
						>
							<rz-restaurant-header
								slot="full"
								.title=${store.state.currentRestaurantData.name}
								.address=${store.state.currentRestaurantData.address +
								', ' +
								store.state.currentRestaurantData.city}
							></rz-restaurant-header>
						</rz-hero-image>
						<div id="main" class="container">
							<div class="restaurant-detail">
								<section class="section">
									<h2 class="section-title">Overview</h2>
									<div class="sub-section">
										<h3 class="sub-section-title">Categories</h3>
										<div class="restaurant-categories">
											${store.state.currentRestaurantData.categories.map(
												(category: { name: string }) => {
													return html`<rz-chip tabindex="0"
														>${category.name}</rz-chip
													>`;
												}
											)}
										</div>
									</div>
									<div class="sub-section">
										<h3 class="sub-section-title">Description</h3>
										<rz-text
											>${store.state.currentRestaurantData
												.description}</rz-text
										>
									</div>
								</section>
								<section class="section">
									<h2 class="section-title">Menu</h2>
									<div class="sub-section">
										<h3 class="sub-section-title">Foods</h3>
										<div class="restaurant-menu">
											<ul>
												${store.state.currentRestaurantData.menus.foods.map(
													(food: { name: string }) => {
														return html`<li tabindex="0">
															<span class="menu-icon"
																><rz-icon
																	icon="food"
																	size="m"
																></rz-icon></span
															>${food.name}
														</li>`;
													}
												)}
											</ul>
										</div>
									</div>
									<div class="sub-section">
										<h3 class="sub-section-title">Drinks</h3>
										<div class="restaurant-menu">
											<ul>
												${store.state.currentRestaurantData.menus.drinks.map(
													(drink: { name: string }) => {
														return html`<li tabindex="0">
															<span class="menu-icon"
																><rz-icon
																	icon="beer"
																	size="m"
																></rz-icon></span
															>${drink.name}
														</li>`;
													}
												)}
											</ul>
										</div>
									</div>
								</section>
								<section class="section">
									<h2 class="section-title">Reviews</h2>
									<div class="restaurant-reviews">
										<review-list></review-list>
									</div>
									<div class="sub-section">
										<h3 class="sub-section-title">Write a review</h3>
										<div class="add-review">
											<add-review-form
												.id=${store.state.currentRestaurantData.id}
											></add-review-form>
										</div>
									</div>
								</section>
							</div>
						</div> `}
		`;
	}

	connectedCallback(): void {
		super.connectedCallback();
		store.events.subscribe('stateChange', () => this.requestUpdate());
		store.dispatch('getRestaurantData', router.location.params.id);
		changeSkipToContentLink(document.URL);
	}

	createRenderRoot(): Element | ShadowRoot {
		return this;
	}
}
