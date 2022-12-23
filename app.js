const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "/public");
app.use(express.static(publicPath));
app.listen(process.env.PORT || 3000, function() {console.log("Servidor corriendo");});
app.get("/", (_, res)=>{res.sendFile(path.join(__dirname, "/views/index.html"))})

