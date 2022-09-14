const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require("cors");

const path = require('path');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB is connected in prot 7071"))
    .catch((err) => console.log(err))

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));


global.__basedir = "./assets/"


app.use('/api/v1/admin', require('./Routes/AdminRouter'));
app.use('/api/v1/about', require('./Routes/AboutRouter'));
app.use("/api/v1/blog", require("./Routes/BlogRouter"));
// app.use("/api/v1/courses", require("./Routes/CoursesRouter"));
app.use("/api/v1/freeResource", require("./Routes/FreeResourceRouter"));
// app.use("/api/v1/recentPublication", require("./Routes/RecentPublicationRouter"));
// app.use("/api/v1/upcoming", require("./Routes/UpcomingRouter"));



app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.get('/', (req, res) => {
    res.json('connected')
})
app.listen(7071, () => console.log("Server connected"));