// Code goes here




function calculateTipAmount() {
  var billPrice = document.getElementById("billPrice").value;
  var slider = document.getElementById("mySlider").value;
  
  if (slider < 10) {
    slider = "0" + slider;
  }
  
  var tipAmount = parseFloat("1." + slider);
  var result = (billPrice * tipAmount).toFixed(2);
  
  document.getElementById("tip").innerHTML = parseInt(slider, 10) + "%";
  document.getElementById("total").innerHTML = "$" + result
  document.getElementById("amount").innerHTML = (result - billPrice).toFixed(2);
}

function updateSliderValue() {
  var slider = document.getElementById("mySlider");
  var result = document.getElementById("result");
  result.innerHTML = slider.value + "%";
}
