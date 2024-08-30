
// QUESTION 1
function lifeInWeeks(age) {
 const realAge = 90 - age;
 const month = realAge * 12;
 const week = realAge * 52;
 const days = realAge * 365;

 if (age > 90){
    console.log("Invalid age input (Age must range from 0 - 90)");
 }else{
    console.log(`You have ${days} days, ${week} weeks, and ${month} months left`);
 }
}
lifeInWeeks( /*Input your age*/ );





// QUESTION2
function loveCalculator(name1, name2){
    const percent = Math.floor(Math.random() * (100 -0 + 1) + 0)
    console.log(`${name1} and ${name2} are ${percent}% match`)
}
loveCalculator("John", "Mary")