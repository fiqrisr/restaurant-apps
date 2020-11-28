import { css } from 'lit-element';

export const shared = css`
	.container {
		margin-left: auto;
		margin-right: auto;
		padding-left: 30px;
		padding-right: 30px;
	}

	@media (min-width: 768px) {
		.container {
			width: 750px;
		}
	}

	@media (min-width: 992px) {
		.container {
			width: 970px;
		}
	}

	@media (min-width: 1200px) {
		.container {
			width: 1170px;
		}
	}

	@media (min-width: 1600px) {
		.container {
			width: 1500px;
		}
	}
`;
