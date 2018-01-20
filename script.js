// Code goes here




function calculateTipAmount() {
  var billPrice = document.getElementById("billPrice").value;
  var slider = document.getElementById("mySlider").value;
  var guests = document.getElementById("guests").value;

  if (slider < 10) {
    slider = "0" + slider;
  }

  var tipAmount = parseFloat("1." + slider);
  var result = (billPrice * tipAmount).toFixed(2);

  document.getElementById("tip").innerHTML = parseInt(slider, 10) + "%";
  document.getElementById("total").innerHTML = "$" + result
  document.getElementById("amount").innerHTML = (result - billPrice).toFixed(2);
  document.getElementById("perGuestTotal").innerHTML = (result / guests).toFixed(2);
}

function updateSliderValue() {
  var slider = document.getElementById("mySlider");
  var result = document.getElementById("result");
  result.innerHTML = slider.value + "%";
}


jQuery(document).ready(function() {

  // Calculate tip when enter pressed
  $("#billPrice").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#calculate").click();
    }
  });

  // This button will increment the value
  $('.qtyplus').click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment only if value is < 20
      if (currentVal < 50) {
        $('input[name=' + fieldName + ']').val(currentVal + 1);
        $('.qtyminus').val("-").removeAttr('style');
      } else {
        $('.qtyplus').val("+").css('color', '#aaa');
        $('.qtyplus').val("+").css('cursor', 'not-allowed');
      }
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(1);

    }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 1) {
      // Decrement one only if value is > 1
      $('input[name=' + fieldName + ']').val(currentVal - 1);
      $('.qtyplus').val("+").removeAttr('style');
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(1);
      $('.qtyminus').val("-").css('color', '#aaa');
      $('.qtyminus').val("-").css('cursor', 'not-allowed');
    }
  });
});
