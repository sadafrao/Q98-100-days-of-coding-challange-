// Q 98
// calculate how many days are left until new year left
function daysUntilNewYear() {
    const currentDate = new Date();
  const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);
  const timeDiff = newYearDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysLeft;
}
console.log(daysUntilNewYear() + "days until new year.");
