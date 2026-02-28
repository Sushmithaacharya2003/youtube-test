import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

function getBasePath() {
  if (!pkg.homepage) {
    return '/';
  }

  try {
    const { pathname } = new URL(pkg.homepage);
    return pathname.endsWith('/') ? pathname : `${pathname}/`;
  } catch {
    return '/';
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? getBasePath() : '/'
}));
