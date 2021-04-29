const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({
    extended: false
}));

// Connect to MongoDB
mongoose
    .connect(
        `mongodb://mongo:${process.env.MONGO_PORT || 88888}/${process.env.COLLECTION || 'pages'}`, {
            useNewUrlParser: true
        }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const Page = require('./models/Page');
Page.deleteMany({});

app.get('/', (req, res) => {
    res.send('ok');
});

app.get('/page', (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.send('missing url');
    }

    Page.findOne({
        url
    })
        .then((p) => {
            const cachedPage = p || {};
            let pageLength = cachedPage.pageLength || Math.round(Math.random() * 10000);
            const cached = !!cachedPage.url;

            if (!cached) {
                const newPage = new Page({
                    url,
                    pageLength,
                });

                newPage.save()
                    .then(() => {
                        console.log('url res cached');
                        res.send({
                            url,
                            pageLength,
                            cached,
                        });
                    })
                    .catch(err => {
                        console.error(err);
                        res.send(`error: ${err}`);
                    });
            }
            else {
                res.send({
                    url,
                    pageLength,
                    cached,
                });
            }
        })
        .catch(err => {
            console.error(err);
            res.send("can't find page")
        });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server running...'));
