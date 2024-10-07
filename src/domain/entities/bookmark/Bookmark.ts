import { InvalidBookmarkJSONError } from "@/domain/entities/bookmark/exceptions/InvalidBookmarkJSONError";
import { InvalidURLError } from "@/domain/entities/bookmark/exceptions/InvalidURLError";

export class Bookmark {
	public readonly url: URL;

	constructor(public readonly name: string, url: string) {
		try {
			this.url = new URL(url);
		} catch (e) {
			throw new InvalidURLError(url);
		}
	}

	public static fromJson(obj: unknown): Bookmark {
		if (isBookmarkJson(obj)) {
			return new Bookmark(obj.name, obj.url);
		}
		throw new InvalidBookmarkJSONError(
			`Object cannot be parsed to a Bookmark, object: '${JSON.stringify(
				obj,
				null,
				2
			)}'`
		);
	}
}

export type BookmarkJson = {
	name: string;
	url: string;
};

export function isBookmarkJson(obj: unknown): obj is BookmarkJson {
	return (
		typeof obj === "object" &&
		obj !== null &&
		"name" in obj &&
		typeof obj.name === "string" &&
		"url" in obj &&
		typeof obj.url === "string"
	);
}
