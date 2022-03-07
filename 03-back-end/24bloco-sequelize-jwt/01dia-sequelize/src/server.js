const express = require("express");
const userController = require("./controllers/userController");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/users", userController);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
