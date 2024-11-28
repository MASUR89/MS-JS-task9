//---სპრედ ოპერატორის გამოყენება ??
const array1 = [2,3,5,];
const array2 = [7,8,11];
const numbers = [...array1, ...array2];
console.log(numbers);

//--- Mapping მეთოდი 
const scrNums = numbers.map(numbers => numbers * numbers);
console.log(scrNums);

//-- მეთოდი filter
const evenNums = numbers.filter(num => num % 2 === 0);
console.log(evenNums);

// --მეთოდი reduce
const redu = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(redu);

// ლოგიკური ოპერატორები:
function checkNumbers(num) {
    if(num > 10 && num % 2 === 0){
        return true
    }else{
        return false
    }
} 
console.log(checkNumbers(redu));