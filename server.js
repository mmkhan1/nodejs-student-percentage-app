const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <h2>Student Marks Percentage Calculator</h2>
        <form method="POST" action="/calculate">
            <label>Enter Marks (out of 100):</label>
            <input type="number" name="marks" required />
            <button type="submit">Calculate</button>
        </form>
    `);
});

app.post("/calculate", (req, res) => {
    const marks = parseFloat(req.body.marks);
    const percentage = (marks / 100) * 100;

    res.send(`<h2>Percentage: ${percentage}%</h2>`);
});

app.listen(3000, () => console.log("App running on port 3000"));
