const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("calculator"));

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Simple server listening at http://localhost:${port}`);
});
