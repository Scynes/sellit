import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
		allowedHosts: [
		  '.localhost', // allow any host ending with ".localhost"
		  '/public/img' // allow a specific directory
		]
	  }
});
