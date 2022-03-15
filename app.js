// function for rule of three
let oneBcPrice = (gld) => {

  solution = gld / 95;
  return solution

}


// onclick event for calc
document.getElementById("btn").addEventListener("click", (event) => {

  event.preventDefault();

  // get form values
  let gold = document.getElementById("gold").value;
  let bc = document.getElementById("bc").value;
  let auction = document.getElementById("auction").value;

  // calculate actual gold price of bc value
  let price = oneBcPrice(gold) * bc;

  let conclusion = `You pay <span class="gold">${price.toFixed(1)} Gold</span> for <span class="crystals">${bc} Blue Crystals.`;

  // get <p>'s by ID
  const recom = document.getElementById("worth")
  const answer = document.getElementById("answer");

  answer.innerHTML = conclusion;

  // check conditionals => which one is cheaper?

  if (auction <= 0 || price <= 0) {

    let worth = `Please enter a valid value.`
    recom.innerHTML = worth;
    answer.innerHTML = "";
  }

  else if (auction < price) {

    let worth = `<span class="gold">Buy it with gold.</span>`
    recom.innerHTML = worth;
  }

  else if (auction === price) {

    let worth = `The price is the same it doesn't matter.`
    recom.innerHTML = worth;
  }

  else {

    let worth = `<span class="crystals">Buy it with Blue Crystals.</span>`
    recom.innerHTML = worth;
  }

});




