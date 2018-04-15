var path = require("path"),
    express = require("express");

var DIST_DIR = path.join(__dirname, "dist"),
    PORT = process.env.PORT || 3000,
    app = express();

app.use(express.static(DIST_DIR));

app.get("*", (req, res) => {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT);
