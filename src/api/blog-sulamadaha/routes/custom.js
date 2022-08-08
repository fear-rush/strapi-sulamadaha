module.exports = {
  routes: [
    {
      method: "GET",
      path: '/blog-sulamadahas/:slug',
      handler: 'blog-sulamadaha.findOne',
      config: {
        auth: false,
      }
    },
  ],
};
