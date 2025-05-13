const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.static(`public`));

app.get("/", (req, res) => {
    res.send(`Server del mio blog`);
});

const posts = [
    {
        titolo: `Ciambellone`,
        contenuto: `Ricetta ciambellone`,
        immagine: `/img/ciambellone.jpeg`,
        tags: [`ciambellone`, `dolce`],
    },

    {
        titolo: `Cracker Barbabietola`,
        contenuto: `Ricetta cracker barbabietola`,
        immagine: `/img/cracker_barbabietola.jpeg`,
        tags: [`cracker`, `barbabietola`],
    },

    {
        titolo: `Pane Fritto Dolce`,
        contenuto: `Ricetta pane fritto dolce`,
        immagine: `/img/pane_fritto_dolce.jpeg`,
        tags: [`pane`, `fritto`, `dolce`],
    },

    {
        titolo: `Pasta Barbabietola`,
        contenuto: `Ricetta pasta barbabietola`,
        immagine: `/img/pasta_barbabietola.jpeg`,
        tags: [`pasta`, `barbabietola`],
    },

    {
        titolo: `Torta Paesana`,
        contenuto: `Ricetta torta paesana`,
        immagine: `/img/torta_paesana.jpeg`,
        tags: [`torta`, `dolce`, `paese`],
    }
];

app.get(`/bacheca`, (req, res) => {
    res.json({ posts });
});

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
})