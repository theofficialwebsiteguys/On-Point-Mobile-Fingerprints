
export default {
  basePath: '/On-Point-Mobile-Fingerprints',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
