/**
 * Returns the slug of a bookmark or folder name.
 * @param bookmarkOrFolderName - The name of the bookmark or folder.
 * @returns The normalized name of the bookmark or folder.
 *
 * @example
 * convertNameToSlug("My Folder") // "my-folder"
 */
export function convertNameToSlug(bookmarkOrFolderName: string) {
	const lowerCaseName = bookmarkOrFolderName.toLowerCase();
	const alphaNumericName = lowerCaseName.replace(/[^a-z0-9]/g, " ");
	const nameSplit = alphaNumericName.split(/\s+/);
	return nameSplit.join("-");
}
