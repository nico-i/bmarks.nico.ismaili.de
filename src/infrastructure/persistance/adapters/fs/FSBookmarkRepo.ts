import { Bookmark, isBookmarkJson } from "@/domain/entities/bookmark/Bookmark";
import { IBookmarkRepo } from "@/domain/repos/IBookmarkRepo";
import { Folder, isFolderJson } from "@/domain/value-objects/folder";
import { InvalidBkmksJSONError } from "@/infrastructure/persistance/adapters/fs/exceptions/InvalidBkmksJSONError";

export class FSBookmarkRepo implements IBookmarkRepo {
	constructor(private readonly bkmksJson: unknown) {}

	async getRoot(): Promise<Folder> {
		const bookmarks: (Bookmark | Folder)[] = [];
		if (
			typeof this.bkmksJson !== "object" ||
			this.bkmksJson === null ||
			"bookmarks" in this.bkmksJson === false
		) {
			throw new InvalidBkmksJSONError("JSON must have a 'bookmarks' key");
		}
		const rootFolder = Folder.fromJson(this.bkmksJson.bookmarks);
		return rootFolder;
	}
}
