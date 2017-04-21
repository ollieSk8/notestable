/**
 * Created by XD on 2017/4/21.
 */
const noteRoutes = require('./note_routes');
const pageRoutes = require('./page_router');
module.exports = function(app, db) {
    pageRoutes(app);
    noteRoutes(app, db);
    // Other route groups could go here, in the future
};