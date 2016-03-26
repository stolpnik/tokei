/// <reference path="../typings/main.d.ts" />

interface GulpConfig {
  typescript: {
    dev: string,
    dist: string,
  };
}

const config: GulpConfig = {
  typescript: {
    dev: 'public/scripts',
    dist: 'dist/scripts'
  }
};

export default config