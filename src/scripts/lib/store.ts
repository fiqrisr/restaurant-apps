/* eslint-disable @typescript-eslint/no-explicit-any */
import PubSub from './pubsub';

type StoreType = {
	actions: Record<string, (store: Store, payload?: any) => void>;
	mutations: Record<string, (state: Record<string, unknown>, payload: any) => void>;
	state: Record<string, any>;
};

export default class Store {
	actions: Record<string, (store: Store, payload?: any) => void>;
	mutations: Record<string, (state: Record<string, unknown>, payload: any) => void>;
	state: Record<string, any>;
	events: PubSub;
	status: string;

	constructor(params: StoreType) {
		this.actions = {};
		this.mutations = {};
		this.state = {};
		this.events = new PubSub();
		this.status = 'default state';

		if (Object.prototype.hasOwnProperty.call(params, 'actions')) this.actions = params.actions;

		if (Object.prototype.hasOwnProperty.call(params, 'mutations'))
			this.mutations = params.mutations;

		this.state = new Proxy(params.state || {}, {
			set: (state, key: string, value) => {
				state[key] = value;
				console.log(`stateChange: ${key}: ${value}`);
				this.events.publish('stateChange', this.state);

				if (this.status !== 'mutation')
					console.warn(`You should use a mutation to set ${key}`);

				this.status = 'resting';
				return true;
			}
		});
	}

	dispatch(actionKey: string, payload?: unknown): boolean {
		if (typeof this.actions[actionKey] !== 'function') {
			console.error(`Action "${actionKey} doesn't exist.`);
			return false;
		}

		console.groupCollapsed(`ACTION: ${actionKey}`);
		this.status = 'action';
		this.actions[actionKey](this, payload);
		console.groupEnd();
		return true;
	}

	commit(mutationKey: string, payload: unknown): boolean {
		if (typeof this.mutations[mutationKey] !== 'function') {
			console.log(`Mutation "${mutationKey}" doesn't exist`);
			return false;
		}

		this.status = 'mutation';
		const newState = this.mutations[mutationKey](this.state, payload);
		this.state = Object.assign(this.state, newState);
		return true;
	}
}
