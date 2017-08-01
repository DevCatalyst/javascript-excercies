// Add your mix of 7 comments and `console.logs`
// to the script below. Then test your code.
// Some ideal locations for comments and logs
// are already added for you to edit.

// WHAT HAPPENS HERE?
function validateDonationAmount (amount) {
  if(amount == false || amount === '' || amount == undefined) {
    return false
  }
  if(amount < 1) {
    // WHAT HAPPENS HERE?
    console.log('something here')
    return false
  }
  // WHAT HAPPENS HERE?
  return true
}
function acceptDonation (amount) {
  if(validateDonationAmount(amount) === false) {
    return false
  }
  return amount
}
// WHAT HAPPENS HERE?
let donation = acceptDonation(350)
// this should always output '350'
console.log(donation)