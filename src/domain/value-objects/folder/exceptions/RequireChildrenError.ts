export class RequireChildrenError extends Error {
	constructor() {
		super("RequireChildrenError: Folder must have at least one child");
	}
}
