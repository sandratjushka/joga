// import database connection
const con = require('../utils/db');


// show author articles
const getAuthorArticles = (req, res) => {
    Author.getName(req.params.author_id,(err, author, articles) => {
        if (err) {
            res.status(500).send({
                message :err.message || 'Some error occurred retrieving author data'
            })
        } else {
            console.log(author, articles)
            res.render('author', {
                articles: articles,
                author: author
            })
        }
    })
};

// export controller functions
module.exports = {
    getAuthorArticles
};