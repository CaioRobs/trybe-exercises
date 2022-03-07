const express = require("express");
const applyControllers = require("./controllers");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
applyControllers(app);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
