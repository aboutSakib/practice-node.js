const School = require("./index");
const school = new School();

school.on("bellRing", ({ chill, text }) => {
  console.log(`aww go to home ${chill} ${text} `);
});
school.startPeriod();
//
