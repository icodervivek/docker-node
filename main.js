const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.json({
    message: "Hey there from docker",
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
