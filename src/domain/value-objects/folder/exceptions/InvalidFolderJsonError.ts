export class InvalidFolderJsonError extends Error {
	constructor(reason: string) {
		super(`Invalid folder JSON: ${reason}`);
	}
}
