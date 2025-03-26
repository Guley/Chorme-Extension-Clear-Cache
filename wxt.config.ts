import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  manifest:{
    name: 'Clear Cache',
    version: '1.0.0',
    description: 'Clear Cache',
    permissions: ['storage',"background","cookies","history","notifications"],
    icons: {
      16: 'icon/16.png',
      24: 'icon/24.png',
      32: 'icon/32.png',
      128: 'icon/128.png',
    },
    action: {
      default_popup: 'popup/App.tsx',
      default_icon: {
        16: 'icon/16.png',
        24: 'icon/24.png',
        32: 'icon/32.png',
        128: 'icon/128.png',
      },
      default_title: 'Clear Cache',
    }
  },
  modules: ['@wxt-dev/module-react'],
});
