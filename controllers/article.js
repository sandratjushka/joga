// import database connection
const con = require('../utils/db');

// show all articles - index page
const getAllArticles = ('/', (req,res) => {
    let query = "SELECT * FROM article";
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {
            articles: articles
        })
    })
});

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