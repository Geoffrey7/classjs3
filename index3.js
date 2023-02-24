// 3.Write a program to print the Fibonacci sequence up to a given number.
function fibonacci(num) {
    let fibSeq = [0, 1];
    
    for (let i = 2; i <= num; i++) {
      let nextFib = fibSeq[i-1] + fibSeq[i-2];
      if (nextFib <= num) {
        fibSeq.push(nextFib);
      } else {
        break;
      }
    }
    
    return fibSeq;
  }
  
 
  console.log(fibonacci(50));