/**
 * Created by XD on 2017/4/21.
 */
module.exports = function(app) {
    app.get('/',(req, res) => {
        res.render('index');
    });
};