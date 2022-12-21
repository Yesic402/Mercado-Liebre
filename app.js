const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname,"./public");
app.use(express.static("public"));
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
  })
  

  app.get("/", (_, res)=>{res.sendFile(__dirname + "/views/home.html")})

