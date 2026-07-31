function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  }
  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamBGoals > teamAGoals) {
    return "Team B Won";
  } else {
    return "Drow";
  }
}
// console.log(matchWinner(2, 1));
// console.log(matchWinner(1, 3));
// console.log(matchWinner(2, 2));
// console.log(matchWinner("3", 2));

// Problem : 2

function isElevatorSafe(weights) {
  if (!Array.isArray(weights)) {
    return "Invalid";
  }
  let totalWeight = 0;
  for (let i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
    // console.log(totalWeight);
  }
  if (totalWeight > 400) {
    return false;
  } else {
    return true;
  }
  return totalWeight;
}
// console.log(isElevatorSafe([60, 75, 50]));
// console.log(isElevatorSafe([90, 100, 95, 120]));
// console.log(isElevatorSafe([400]));
// console.log(isElevatorSafe("60,75,50"));

// problem: 3

function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "invalid";
  }
  if (tokensUsed <= 500) {
    return 0;
  }
  let extraToken = tokensUsed - 500;
  let chargeableBlock = Math.floor(extraToken / 100);
  return chargeableBlock * 5;
}
// console.log(calculateAiCost(300))
// console.log(calculateAiCost(500))
// console.log(calculateAiCost(650))
// console.log(calculateAiCost(1000))
// console.log(calculateAiCost(-10))
// console.log(calculateAiCost("500"))

// problem : 4

function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }

  let topRestaurant = restaurants[0];

  for (let i = 1; i < restaurants.length; i++) {
    if (restaurants[i].rating > topRestaurant.rating) {
      topRestaurant = restaurants[i];
    }
  }

  return topRestaurant.name.toUpperCase();
}

// console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]))
// console.log(topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]))
// console.log(topRatedRestaurant([]))
// console.log(topRatedRestaurant("restaurants"))

// problem : 5

function averageResponseTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
  }

  let total = 0;

  for (let i = 0; i < times.length; i++) {
    total += times[i];
  }

  return total / times.length;
}
console.log(averageResponseTime([120, 200, 150, 130]));
console.log(averageResponseTime([100, 100]));
console.log(averageResponseTime([]));
console.log(averageResponseTime("logs"));
console.log(averageResponseTime([120, "200", 150]));
