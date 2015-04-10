
var connectRoutes = function(expressApp) {
  expressApp.all('*', function (req, res) {
    res.send(404, 'bad route');
  });
};


exports.connectRoutes = connectRoutes;