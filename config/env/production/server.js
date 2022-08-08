// module.exports = ({ env }) => ({
//  url: env('https://api-sulamadaha.herokuapp.com/')
// });

module.exports = ({ env }) => ({
  url: env('https://api-sulamadaha.herokuapp.com/'),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
