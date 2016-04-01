export default function (server) {

  server.route({
    path: '/api/segments/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
