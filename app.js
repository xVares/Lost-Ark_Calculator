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

  let conclusion = `You pay ${price.toFixed(1)} Gold for ${bc} Blue Crystals.`

  document.getElementById("answer").innerHTML = conclusion;


  const recom = document.getElementById("worth")

  // check conditionals => which one is cheaper?
  if (auction < price) {

    let worth = `Buy it with gold`
    recom.innerHTML = worth;
  }

  else if (auction === price) {

    let worth = `The price is the same it doesn't matter.`
    recom.innerHTML = worth;
  }

  else {

    let worth = `Buy it with Blue Crystals.`
    recom.innerHTML = worth;
  }


});




