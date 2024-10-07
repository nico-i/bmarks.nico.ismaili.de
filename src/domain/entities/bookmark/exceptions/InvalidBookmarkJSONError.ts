export class InvalidBookmarkJSONError extends Error {
	constructor(reason: string) {
		super(`InvalidBookmarkJSONError: ${reason}`);
	}
}
