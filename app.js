const express = require("express")
const app = express()
const port = 3000

//3rd party middleware's
const cookieParser = require("cookie-parser")

//Routes import area
const indexRoute = require("./routes/index")
const adminRoute = require("./routes/admin")
const registerRoute = require("./routes/register")


//MIDLEWARE SECTION
//Creating middleware to use JSON POST's REQUEST's
app.use(express.json())
app.use(cookieParser())



//Middleware that will be in action after any user request
app.use((req, res, next) => {
	console.log(`Executando middleware em nível de aplicação.`)
	return next()
})

app.get("/setcookies", (req, res) => {
	res.cookie('usuario', "Edson Silva", {maxAge: 900000, httpOnly: true})
	res.send("Cookie gravado com sucesso!")
})

app.get("/getcookies", (req, res) => {
	const user = req.cookies['usuario']

	if (user) {
		return res.send(user)
	}
})


//Using import routes
app.use("/", indexRoute)
app.use("/admin", adminRoute)
app.use("/register", registerRoute)


//Post user to register:

//Server console
app.listen(port, () => {
	console.log(`Server running at: http://localhost:${port}`)
})