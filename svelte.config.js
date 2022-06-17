import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path'


/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $components: resolve('./src/components'),
          $lib: resolve('./src/lib'),
          $stores: resolve('./src/stores'),
          $utils: resolve('./src/utils')
        }
      }
    }
  }
};

export default config;
