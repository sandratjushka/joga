// import database connection
const con = require('../utils/db');


// show author articles
const getAuthorArticles = ('/author/:author_id', (req, res) => {
    const author_id = req.params.author_id;

    let sql = `SELECT * FROM article WHERE author_id = ${author_id}`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        const articles = result;
        sql = `SELECT * FROM author WHERE id = ${author_id}`
        con.query(sql, (err, result) => {
            let author = result
            console.log(articles)
            console.log(author)
            res.render('author', {
                articles: articles,
                author: author
            });
        })
    });
});
// export controller functions
module.exports = {
    getAuthorArticles
};