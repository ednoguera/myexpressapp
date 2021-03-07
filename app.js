const express = require("express")
const app = express()
const port = 3000

//Routes import area
const indexRoute = require("./routes/index")
const adminRoute = require("./routes/admin")
const registerRoute = require("./routes/register")


//Creating middleware to use JSON POST's REQUEST's
app.use(express.json())


//Using import routes
app.use("/", indexRoute)
app.use("/admin", adminRoute)
app.use("/register", registerRoute)


//Post user to register:

//Server console
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`)
})