// 4.Write a program to find the factorial of a given number.
function Ffactorial(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
      result *= i;
    }
    return result;
  }
  
  
  console.log(Ffactorial(8));  

