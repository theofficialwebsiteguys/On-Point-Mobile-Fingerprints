
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/On-Point-Mobile-Fingerprints/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7671, hash: '554d4fe6a3eb7a2dc025813050e9e487b40d7cfc15bdd8ed9a028823c1447c70', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7910, hash: 'e361726d819e767f8aa29ba8fd12ed3d2959d71bf568119b179db2c98b33da0e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7Y4SFHNB.css': {size: 528, hash: 'sLJ3STwm6Xg', text: () => import('./assets-chunks/styles-7Y4SFHNB_css.mjs').then(m => m.default)}
  },
};
