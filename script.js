function sumOfDigits(number){
    let sum = 0;
    while (number > 0) {
        let digit = number % 10;
        sum += digit;
        number = Math.floor(number / 10);
      }
      return sum;
}

function isArmstrong(number){
    let sum = 0;
    let num = number;
    while (num > 0) {
        let digit = num % 10;
        sum += digit**3;
        num = Math.floor(num / 10);
      }
      if(sum == number){
        return true;
      }
      else{
        return false;
      }
}

function isPrime(number){
  if (number <= 1) return false;
  if (number % 2 === 0 && number !== 2) return false; 
   for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  } return true;
}

function factorsOfNumber(number){
 if (number <= 0) return [];

 const factors = [];
 for (let i = 1; i <= Math.sqrt(number); i++) {
   if (number % i === 0) {
     factors.push(i);
     if (i * i !== number) {
       factors.push(number / i);
     }
   }
 }
 return factors.sort((a, b) => a - b);
}

let num = 153;
console.log(`Sum of digits: ${sumOfDigits(num)}`)
console.log(`It is an Armstrong number? ${isArmstrong(num)}`)
console.log(`It is a prime number? ${isPrime(num)}`)
console.log(`Factors of num are: ${factorsOfNumber(num)}`)