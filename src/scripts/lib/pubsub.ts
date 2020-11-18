/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default class PubSub {
	events: Record<string, any>;

	constructor() {
		this.events = {};
	}

	subscribe(event: string, callback: unknown) {
		if (!Object.prototype.hasOwnProperty.call(this.events, event)) this.events[event] = [];

		return this.events[event].push(callback);
	}
	publish(event: string, data = {}) {
		if (!Object.prototype.hasOwnProperty.call(this.events, event)) return [];

		return this.events[event].map((callback: (data: unknown) => unknown) => callback(data));
	}
}
