const EventEmitter = require("events");
class school extends EventEmitter {
  startPeriod() {
    console.log("class started!!!");

    setTimeout(() => {
      this.emit("bellRing", {
        chill: "chill",
        text: "this time",
      });
    }, 2000);
  }
}
module.exports = school;
