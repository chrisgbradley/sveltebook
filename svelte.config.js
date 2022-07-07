import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({ typescript: true })],

	kit: {
		adapter: adapter(),
		alias: {
		  $components: 'src/lib/components',
		  $utils: 'src/lib/utils'
		}
	}
};

export default config;
