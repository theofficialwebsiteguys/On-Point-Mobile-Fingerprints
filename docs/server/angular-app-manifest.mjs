
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/On-Point-Mobile-Fingerprints/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7694, hash: '6702ab5c8a0c7bf2d8e3ce546b88cba00b5c9be5863807d31779fd89061f6bc0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7910, hash: 'b7ca4ea7d58ca9422043e8aee7ee46f314e5194fc6986993431a41c74737eb32', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TCK4GTV7.css': {size: 565, hash: '3ojDMbh5emQ', text: () => import('./assets-chunks/styles-TCK4GTV7_css.mjs').then(m => m.default)}
  },
};
