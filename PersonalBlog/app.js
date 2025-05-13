const express = require(`express`);
const app = express();
const { posts, appURL, appPort } = require(`./data/db`);


app.use(express.static(`public`));

app.get("/", (req, res) => {
    res.send(`Server del mio blog`);
});


app.get(`/bacheca`, (req, res) => {
    res.json({ posts });
});

app.listen(appPort, () => {
    console.log(`Server listening on ${appURL}`);
})