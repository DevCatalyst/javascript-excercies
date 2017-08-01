// Add your mix of 7 comments and `console.logs`
// to the script below. Then test your code.
// No suggestions this time. Show us what you have in you.

var review = [];
review['message'] = "The staff were extremely friendly and the food was fantastic!"
review['name'] = "Dan Dromygosh"

function showCustomerReview (name, review) {
  if(name === undefined || review === undefined) {
    return false
  }
  if(name === '' || review === '') {
    return false
  }
  return review + ' - by ' + name
}
console.log('Review: '+showCustomerReview(review.name,review.message))