// function to calc worth of one bc
let oneBcPrice = (gld) => {

  solution = gld / 95;
  return solution

}


// on click event for calc
document.getElementById("btn").addEventListener("click", (event) => {

  event.preventDefault();

  // get form input values
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

  // conditionals
  if (auction <= 0 || price <= 0) {

    let worth = `Please enter valid data.`
    recom.innerHTML = worth;
    answer.innerHTML = "";
  }

  else if (auction <= price) {

    let worth = `<span class="gold">Buy your item with gold.</span>`
    recom.innerHTML = worth;
  }

  else if (auction >= price) {

    let worth = `<span class="crystals">Buy it with Blue Crystals.</span>`
    recom.innerHTML = worth;
  }

});




