const moment = require("moment");
const lodash = require("lodash");

const momentAnswers = document.getElementById("momentAnswers");
const lodashAnswers = document.getElementById("lodashAnswers");

function createItem(parent, content, suffix = "") {
  let li = document.createElement("li");
  li.innerHTML = content + " " + suffix;
  parent.append(li);
}

createItem(momentAnswers, moment().format("MMMM Do YYYY, h:mm:ss a"));
createItem(momentAnswers, moment().format("dddd"));
createItem(momentAnswers, moment().format("MMM Do YY"));
createItem(
  momentAnswers,
  moment().add(7, "days").calendar(),
  "is the date after 7 days from now."
);
createItem(
  momentAnswers,
  moment().add(7, "months").calendar(),
  "is the date after 7 months from now."
);
createItem(
  momentAnswers,
  moment().add(7, "years").calendar(),
  "is the date after 7 years from now."
);
createItem(
  momentAnswers,
  moment().subtract(7, "days").calendar(),
  "was the date 7 days earlier."
);
createItem(
  momentAnswers,
  moment().subtract(7, "months").calendar(),
  "was the date 7 months earlier."
);
createItem(
  momentAnswers,
  moment().subtract(7, "years").calendar(),
  "was the date 7 years earlier."
);

let date1 = moment([2014, 11, 11]);
let date2 = moment([2015, 09, 11]);

createItem(
  momentAnswers,
  date2.diff(date1, "months"),
  "months is the difference between 2020-01-01 and 2020-14-01."
);

let date3 = moment([2014, 11, 27]);
let date4 = moment([2015, 09, 16]);

createItem(
  momentAnswers,
  date4.diff(date3, "months"),
  "months is the difference between 2014-11-27 and 2015-09-16."
);

let date5 = moment([2020, 01, 01]);
let date6 = moment([2018, 01, 01]);

createItem(
  momentAnswers,
  date5.diff(date6, "months"),
  "months is the difference between 2020-01-01 and 2018-01-01."
);

// Lodash

createItem(
  lodashAnswers,
  JSON.stringify(lodash.chunk(["a", "b", "c", "d"], 2))
);

createItem(lodashAnswers, JSON.stringify(lodash.difference([2, 1], [2, 3])));

createItem(lodashAnswers, JSON.stringify(lodash.concat([1], 2, [3], [[4]])));

createItem(lodashAnswers, JSON.stringify(lodash.drop([1, 2, 3], 2)));

createItem(lodashAnswers, JSON.stringify(lodash.fill([1, 2, 3], "a")));

//

createItem(
  lodashAnswers,
  JSON.stringify(lodash.countBy([6.1, 4.2, 6.3], Math.floor))
);
createItem(
  lodashAnswers,
  JSON.stringify(lodash.flatMap([1, 2], (n) => [n, n]))
);
createItem(
  lodashAnswers,
  JSON.stringify(lodash.groupBy(["one", "two", "three"], "length"))
);
createItem(lodashAnswers, JSON.stringify(lodash.includes([1, 2, 3], 1)));
createItem(
  lodashAnswers,
  JSON.stringify(
    lodash.invokeMap(
      [
        [5, 1, 7],
        [3, 2, 1],
      ],
      "sort"
    )
  )
);
