const cors = require("cors")
const express = require("express")

const app = express()

// app.use(cors)

app.get("/api", (req, res) => {
  const now = Date.now()
  res.json({ unix: now, utc: new Date(now).toUTCString() })
})

app.get("/api/:date", (req, res) => {
  const { date } = req.params

  let parsedDate
  if (date.includes("-")) parsedDate = Date.parse(date)
  else parsedDate = parseInt(date)

  if (new Date(parsedDate) == "Invalid Date")
    return res.json({ error: "Invalid Date" })

  res.json({ unix: parsedDate, utc: new Date(parsedDate).toUTCString() })
})

app.listen(9000, () => {
  console.log("Listening at port 9000...")
})
