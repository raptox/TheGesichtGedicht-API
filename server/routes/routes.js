var poemController = require('../controllers/poems');

var appRouter = function (app) {
    app.get("/", function (req, res) {
        res.send("Hello World!");
    });

    app.get("/poems", poemController.listAll);
};

module.exports = appRouter;