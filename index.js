function calculateTax(amount) {
    return amount * 0.10;
}
function convertToUpperCase(text){
    return text.toUpperCase();
}
function findMaximum(a, b) {
    return Math.max(a, b);
}
function isPalindrome(text) {
return text === text.split('').reverse().join('');
}
function calculateDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };