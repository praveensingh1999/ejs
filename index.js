import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date("June 28, 2023 11:13:00");
  const day = today.getDay();

  let Type = "a weekday";
  let advice = "its time to work hard";

  if (day === 0 || day === 6) {
    Type = "the weekend";
    advice = "its time for fun";
  }
  res.render("index.ejs", {
    dayType: Type,
    advice: advice,
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});
