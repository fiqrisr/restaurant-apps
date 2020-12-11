type test = 'webp';

declare class Modernizr {
	static on(test: test, cb: (result: unknown) => unknown): void;
}
