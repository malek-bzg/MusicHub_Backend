const express = require("express")
const app = express()

const mongoose = require("mongoose")
const port = process.env.PORT || 3000
const config = require("./config.json")
const bodyParser = require("body-parser")
const path = require("path");
const morgan = require("morgan")

app.use(morgan('combined'))


app.use(express.static('public'));  
app.use('/img', express.static('uploads/images'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use("/api/panier", require("./routes/panier-route"))
app.use("/api/user", require("./routes/user-route"))
app.use("/api/musicproject", require("./routes/musicproject-route"))

mongoose.Promise = global.Promise
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("Connecté a la base de données")
    },
    (err) => {
      console.log("Connexion a la base de données echouée", err)
    }
  )

if (process.env.NODE_ENV === "produition") {
  console.log("app in produition mode")
  app.use(express.static("client/build"))
  app.get("/*", function (req, res) {
    res.sendFile(
      path.join(__dirname, "client", "build", "index.html"),
      function (err) {
        if (err) res.status(500).send(err)
      }
    )
  })
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
//mongodb+srv://peddler:peddler-cred@cluster0.ialfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority