let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function() {
    let count = 0;
  for (let toppings in this) {
    let topping = this[toppings];

    if (topping === 'cash') continue;
    
    for (let category in topping) {
        count += topping[category].cost * topping[category].quantity;
    }
  }
  return count
}

tacoCatInc.sale = function(order) {

  let price = 0;

  for (let toppings in order) {
    let topping = order[toppings];

    price += this[toppings][topping].cost;

    this.cash += this[toppings][topping].cost;

    this[toppings][topping].quantity--;

  }
  return price
}