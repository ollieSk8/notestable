/**
 * Created by XD on 2017/4/21.
 */
module.exports = function(app, db) {
    app.get('/notes',(req, res) => {
        var cursor = db.collection('notes').find().toArray(function(err, results) {
            res.send(results);
        });
    });
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};