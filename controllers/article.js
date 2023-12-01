// import database connection
const Article = require('../models/article.model.js');

// show all articles - index page
const getAllArticles =  (req,res) => {
    Article.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message : err.message || 'Some error occurred retrieving articles data'
            })
        } else {
            console.log(data)
            res.render('index', {
                articles: data
            })
        }
    })
};


//show article by this slug
const getArticleBySlug = ('/article/:slug',(req,res) => {
    let query=`SELECT * FROM article 
    inner join author on slug="${req.params.slug}" AND article.author_id = author.id`
    let article
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result
        console.log(article)
        res.render('article', {
            article:article
        })
    })
})

// export controller functions
module.exports = {
    getAllArticles,
    getArticleBySlug
};