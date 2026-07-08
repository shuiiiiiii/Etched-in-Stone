// const express = require("express");
// const app = express();
// const PORT = 6767;

// const indexRoutes = require("./routes/indexRoutes");

// app.set("view engine", "ejs");
// app.use("/static", express.static("public"));

// app.use(indexRoutes);

// app.listen(PORT || process.env.PORT, process.env.IP, () => {
//     console.log("Server is up on PORT: 6767");
// });

const path = require("path"); // 1. Added path module
const express = require("express");
const app = express();
const PORT = process.env.PORT || 6767; // 2. Cleaned up port logic

const indexRoutes = require("./routes/indexRoutes");

// 3. CRITICAL FOR VERCEL: Fix file paths using path.join and __dirname
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(indexRoutes);

// 4. CRITICAL FOR VERCEL: Only listen locally, export for production
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is up on PORT: ${PORT}`);
    });
}

module.exports = app; // 5. REQUIRED: Export the app instance

