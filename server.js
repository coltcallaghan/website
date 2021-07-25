const express     = require("express"),
    app         = express();


//requiring routes
const aboutRoutes = require("./routes/about");
const portfolioRoutes = require("./routes/portfolio");
const indexRoutes      = require("./routes/index");

app.set('view engine', 'ejs');


app.use("/", indexRoutes);
app.use("/about", aboutRoutes);
app.use("/portfolio", portfolioRoutes);


// Start serv & listen on port 3000.
app.listen(3000, function () {
  console.log('Node listening on port 3000')
})