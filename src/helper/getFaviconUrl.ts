export async function getFaviconUrl(url: URL): Promise<string | null> {
	try {
		const response = await fetch(url.origin);
		const html = await response.text();

		// Try to find favicon in link tags
		const linkMatch = html.match(
			/<link[^>]*rel=["'](?:shortcut )?icon["'][^>]*>/i
		);
		if (linkMatch) {
			const hrefMatch = linkMatch[0].match(/href=["']([^"']+)["']/i);
			if (hrefMatch) {
				const faviconUrl = new URL(hrefMatch[1], url);
				const faviconResponse = await fetch(faviconUrl);

				if (faviconResponse.ok) {
					return faviconUrl.href;
				}
			}
		}

		return null;
	} catch (error) {
		console.error("Error fetching favicon:", error);
		return null;
	}
}
