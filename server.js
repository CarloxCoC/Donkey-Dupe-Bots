const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const Bot = require("./Bot")
let bots = []

app.get("/bots", (req, res) => {
  res.send(JSON.stringify(bots.map(bot => bot.username)))
})

app.post("/task", (req, res) => {
  const { task } = req.body

  if (task == "start") {
    const { username, password } = req.body
    if (bots.find(b => b.username == username)) return
    const bot = new Bot()
    bot.startBot(username, password)
    bots.push(bot)

    bot.on("end", () => {
      bots = bots.filter(b => b.username != bot.username)
    })
  } else if (task == "stop") {
    bots.find(b => b.username == req.body.username)?.bot?.end()
  } else if (task == "openall") {
    bots.forEach(b => {
      b.openDonkeyInventory(b.bot)
    })
  } else if (task == "dropall") {
    bots.forEach(b => {
      b.dropItems(b.bot, req.body.coords)
    })
  } else if (task == "pickall") {
    bots.forEach(b => {
      b.pickItems(b.bot)
    })
  }

  res.sendStatus(200)
})

app.listen(1492, () => {
})