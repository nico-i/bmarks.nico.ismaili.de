import { Bookmark, isBookmarkJson } from "@/domain/entities/bookmark/Bookmark";
import { InvalidBookmarkJSONError } from "@/domain/entities/bookmark/exceptions/InvalidBookmarkJSONError";
import { InvalidFolderJsonError } from "@/domain/value-objects/folder/exceptions/InvalidFolderJsonError";

export class Folder {
	constructor(
		public readonly name: string,
		public readonly children: (Bookmark | Folder)[]
	) {}

	public static fromJson(obj: unknown): Folder {
		if (isFolderJson(obj)) {
			return new Folder(
				obj.name,
				obj.children.map((child) => {
					if (isBookmarkJson(child)) {
						return Bookmark.fromJson(child);
					} else if (isFolderJson(child)) {
						return Folder.fromJson(child);
					}
					throw new InvalidBookmarkJSONError(JSON.stringify(child));
				})
			);
		}
		throw new InvalidFolderJsonError(JSON.stringify(obj));
	}
}

export interface FolderJson {
	name: string;
	children: unknown[];
}

export function isFolderJson(obj: unknown): obj is FolderJson {
	return (
		typeof obj === "object" &&
		obj !== null &&
		"name" in obj &&
		typeof obj.name === "string" &&
		"children" in obj &&
		Array.isArray(obj.children)
	);
}
