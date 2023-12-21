const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const PORT = process.env.PORT || 3000;
const dotnev = require("dotenv");
dotnev.config();

// Middleware for parsing request bodies
app.use(express.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.use('*', (req, res) => {
    res.status(404).json({ msg: '404 - Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
