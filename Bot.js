const mineflayer = require("mineflayer");
const { Vec3 } = require("vec3");
const EventEmitter = require('events');

class Bot extends EventEmitter {
  constructor() {
    super();
    this.username = null;
    this.donkeyInventory = null;
    this.bot = null;
  }

  startBot(username, password) {
    this.username = username
    this.donkeyInventory
    let lobbyF = false

    const bot = mineflayer.createBot({
      username: username,
      skipValidation: true,
      host: "6b6t.org"
    });

    this.bot = bot;

    function isInLobby() {
      if (bot?.game?.difficulty != "hard") {
        if (!lobbyF) leaveLobby()
        return true;
      } else {
        return false;
      }
    }
    
    async function leaveLobby() {
      lobbyF = true
    
      bot.controlState.forward = true
      await bot.waitForTicks(40)
      bot.controlState.forward = false
    
      while (bot?.game?.difficulty == "peaceful") {
        bot.controlState.back = true
        await bot.waitForTicks(20)
        bot.controlState.back = false

        if (bot?.game?.difficulty == "peaceful") break
    
        bot.controlState.forward = true
        await bot.waitForTicks(30)
        bot.controlState.forward = false
      }
    
      lobbyF = false
    }

    bot.once("spawn", async () => {
      bot.chat("/login "+password)
      let lobbyCount = 0;
      while (true) {
        await bot.waitForTicks(20);
        if (lobbyCount > 30) {
          bot.end();
          break;
        }
        if (!bot.entity?.position) continue;
        if (isInLobby()) lobbyCount++;
      }
    });

    bot.on("spawn", () => {
      if (bot?.game?.difficulty != "peaceful") {
        bot.controlState.forward = false
        bot.controlState.back = false
      }
    })

    bot.on("end", () => {
      this.emit("end")
    });

    return bot;
  }

  async openDonkeyInventory(bot) {
    const donkey = bot.nearestEntity(entity => entity.name === "donkey");
    if (!donkey) return null;
    this.donkeyInventory = await bot.openEntity(donkey);
  }

  async pickItems(bot) {
    if (!bot.currentWindow) return
    for (let i = 0; i < bot.currentWindow.inventoryStart; i++) {
      if (!bot.currentWindow?.slots[i] || bot.currentWindow.slots[i].name == "saddle") continue;
      bot.simpleClick.leftMouse(i);
      await bot.waitForTicks(2);
      bot.simpleClick.leftMouse(bot.currentWindow.firstEmptyInventorySlot());
      await bot.waitForTicks(2);
    }
    bot.closeWindow(this.donkeyInventory);
  }

  async dropItems(bot, coords) {
    const {x, y, z} = coords;
    const vec = new Vec3(parseInt(x), parseInt(y) + 3, parseInt(z));
    await bot.lookAt(vec);
    await bot.waitForTicks(10);
    for (const item of bot.inventory.slots) {
      if (!item) continue;
      await bot.tossStack(item);
    }
  }

  async botStop(bot) {
    bot.stop()
  }

}

module.exports = Bot;