import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://novanode.com.au',
  output: 'static',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
