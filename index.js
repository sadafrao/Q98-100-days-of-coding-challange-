// Q 98
// calculate how many days are left until new year left
function daysUntilNewYear() {
    var currentDate = new Date();
    var newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);
    var timeDiff = newYearDate.getTime() - currentDate.getTime();
    var daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
}
console.log(daysUntilNewYear() + "days until new year.");
