const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, name) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(name.toLowerCase())
  );
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(drivers, letter) {
  return drivers.filter((drivers) => drivers.startsWith(letter));
}

//console.log(fuzzyMatch(drivers, "S"));
const driversObj = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
function matchName(driver, name) {
  return driver.filter((driver) => driver.name === name);
}
console.log(matchName(driversObj, "Bobby"));
