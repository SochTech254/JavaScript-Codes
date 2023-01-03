// A promise is an object representing the eventual completion or failure
// of an assynchronous operation.
const cart  = ["shoes", "pants", "kurta"];

/*
callback hell solved using promises: 
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });
    });
});
*/


createOrder(cart)
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
});

const GITHUB_API = "https://api.github.com/users/SochTech254";

const user = fetch(GITHUB_API);

console.log(user);