const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.get('/welcome', (req, res) => {
    res.json({ message: "🌸 Welcome to our cozy corner of the internet! We're so glad you're here—make yourself at home! 💖 🌟" });
});

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:${PORT}");
});