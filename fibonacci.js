// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(n){
    let fibs = [0,1];
    for(i = 2; i < n; i++){
        fibs.push(fibs[i-1] + fibs[i - 2]);
    }
    return fibs;
}

console.log(fibs(10))

function fibsRec(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let fibs = fibsRec(n - 1);
      fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
      return fibs;
    }
  }
  
  console.log(fibsRec(10))