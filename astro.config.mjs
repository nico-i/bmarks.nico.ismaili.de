import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: `https://nico-i.github.io/`,
	base: `bmarks.nico.ismaili.de`,
	integrations: [tailwind({ applyBaseStyles: false })],
});
