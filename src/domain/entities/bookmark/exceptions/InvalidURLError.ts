export class InvalidURLError extends Error {
	constructor(url: string) {
		super(`InvalidURLError: ${url}`);
	}
}
