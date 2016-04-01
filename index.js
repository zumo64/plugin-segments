import routes from './server/routes/routes';



export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      app: {
        title: 'Segments',
        description: 'Display segment allocation in real time',
        main: 'plugins/segments/controllers/main'
      },
      hacks: [
        'plugins/segments/hack'
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) {
       server.log(["info"],"init  routes");
      // Add server routes and initalize the plugin here
       routes(server);
    }

  });
};
