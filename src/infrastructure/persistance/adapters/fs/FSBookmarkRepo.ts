import { Bookmark, isBookmarkJson } from "@/domain/entities/bookmark/Bookmark";
import { IBookmarkRepo } from "@/domain/repos/IBookmarkRepo";
import { Folder, isFolderJson } from "@/domain/value-objects/folder";
import { InvalidBkmksJSONError } from "@/infrastructure/persistance/adapters/fs/exceptions/InvalidBkmksJSONError";

export class FSBookmarkRepo implements IBookmarkRepo {
	constructor(private readonly bkmksJson: unknown) {}

	async getRoot(): Promise<(Bookmark | Folder)[]> {
		const bookmarks: (Bookmark | Folder)[] = [];
		if (
			typeof this.bkmksJson !== "object" ||
			this.bkmksJson === null ||
			"bookmarks" in this.bkmksJson === false
		) {
			throw new InvalidBkmksJSONError("JSON must have a 'bookmarks' key");
		}

		if (!Array.isArray(this.bkmksJson.bookmarks)) {
			throw new InvalidBkmksJSONError("'bookmarks' key must be an array");
		}

		for (const obj of this.bkmksJson.bookmarks) {
			if (isBookmarkJson(obj)) {
				bookmarks.push(Bookmark.fromJson(obj));
			} else if (isFolderJson(obj)) {
				bookmarks.push(Folder.fromJson(obj));
			} else {
				throw new InvalidBkmksJSONError(
					`All bookmarks must be either a Bookmark or a Folder, invalid object: ${JSON.stringify(
						obj
					)}`
				);
			}
		}

		return bookmarks;
	}
}
