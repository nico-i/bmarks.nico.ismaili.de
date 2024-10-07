export class InvalidBkmksJSONError extends Error {
	constructor(reason: string) {
		super(`InvalidBkmksJSONError: ${reason}`);
	}
}
