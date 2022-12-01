const express = require("express")
const path = require("path")

const app = express()

app.use("/client", express.static("client"))
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "/src/index.html"))
})
app.listen(300, () => {
  console.log("Running")
})
