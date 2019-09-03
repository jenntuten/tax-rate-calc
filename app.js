$(document).ready(function () {
    
$('.nights-button').on ('click', function () {
  let nightlyInput = $('.nightly-input').val();
  let nightsInput = $('.nights-input').val();
  let total = nightsInput*nightlyInput;
  let newTotal = total.toLocaleString('en');
  console.log('newTotal: ',newTotal);
  $('.amount').html('$'+total.toFixed(2));
  
  let tax = $('.tax-input').val();
  console.log(tax);
  let taxCalc= tax/100+1;
  let grandTotal = total*taxCalc;
  console.log('grandTotal: ', grandTotal)
  //try: toFixed and then toLocaleString
  
  //console.log('grand total: ', grandTotal.toLocaleString('en'));
  //console.log('grand total parsed: ',grandTotal.toFixed(2));
  /*let newGrandTotal = grandTotal.toFixed(2);
  console.log('newGrandTotal:',newGrandTotal);
  let finalTotal = newGrandTotal.toLocaleString('en');
  console.log('finalTotal: ',finalTotal);
  
  //alternatively, if there's only 1 character past the decimal point, a zero can be added in.
  */
$('.grand-total').html('$'+grandTotal.toFixed(2));
})
$('.reset-button').on ('click', function () {
  $('.nights-input').val('');
  $('.nightly-input').val('');
  $('.amount').html('');
  $('.grand-total').html('');
  $('.tax-input').val('');
})
$('.nightBtn').on ('click', function () {
  let nightlyRate = $('.nightly-rate').val();
  let numNights = $('.night-input').val();
  let nightsAfterTax=$('.all-nts-tax').val();
  let mult = nightlyRate/numNights;
  $('.average').html('$'+mult.toFixed(2));
  let multTax = nightsAfterTax/numNights;
  $('.avg-after-tax').html('$'+multTax.toFixed(2));
})
$('.resetBtn').on ('click', function () {
  $('.night-input').val('');
  $('.nightly-rate').val('');
  $('.all-nts-tax').val('');
  $('.average').html('');
  $('.avg-after-tax').html('');
})
$('.ntsBtn').on ('click', function () {
  let ntsBefore = $('.nts-before').val();
  let ntWithTax = $('.one-nt-tax').val();
  let ntsTotal = ntsBefore*ntWithTax;
  let numberNights = $('.number-nights').val();
  let totalNtsBefore = ntsBefore*numberNights;
  let totalNtsAfter = ntWithTax*numberNights;
$('.grand-total-before').html('$'+totalNtsBefore.toFixed(2));
$('.grand-total-tax').html('$'+totalNtsAfter.toFixed(2));
})
$('.reset-Btn').on ('click', function () {
  $('.nts-before').val('');
  $('.one-nt-tax').val('');
  $('.number-nights').val('');
  $('.grand-total-before').html('');
  $('.grand-total-tax').html('');
})
$('.feeBtn').on ('click', function () {
  let currentRate= $('.before-fee').val();
  console.log('currentRate: ',currentRate);
  let currRate = parseFloat(currentRate);
  console.log('currRate: ', currRate);
  let feeInput = $('.fee-input').val();
  console.log('fee input: ',feeInput);
  let clientFee = parseFloat(feeInput);
  console.log('clientFee: ', clientFee);
  let feeTotal = currRate+clientFee;
  console.log('feeTotal: ',feeTotal);
  $('.amt-after-fee').html('$'+feeTotal.toFixed(2));
})
$('.resetFee').on ('click', function () {
  $('.before-fee').val('');
  $('.fee-input').val('');
  $('.amt-after-fee').html('');
})
$('.fifth-nights-button').on ('click', function () {
  let fifthColTotal = $('.fifth-col-total').val();
  let fifthTaxInput = $('.fifth-tax-input').val();
  let fifthTaxCalc = fifthTaxInput/100+1;
  console.log(fifthTaxCalc);
  let fifthTotal = fifthColTotal*fifthTaxCalc;
  console.log('fifthTotal: ',fifthTotal);
$('.fifth-total').html('$'+fifthTotal.toFixed(2));
})
$('.fifth-reset-button').on ('click', function () {
  $('.fifth-tax-input').val('');
  $('.fifth-col-total').val('');
  $('.fifth-total').html('');

})
})