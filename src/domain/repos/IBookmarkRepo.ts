import { Bookmark } from "@/domain/entities/bookmark/Bookmark";
import { Folder } from "@/domain/value-objects/folder/Folder";

export interface IBookmarkRepo {
	getRoot(): Promise<(Bookmark | Folder)[]>;
}
