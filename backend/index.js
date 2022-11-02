const express = require("express");
port = 3005;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: ["Hello OSFD World!"] });
}); //

app.listen(port, () => console.log(`port running on ${port}`));
