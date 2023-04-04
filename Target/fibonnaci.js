function verificaFibonacci(num) {
    let a = 0;
    let b = 1;
    let c;
  
    while (a <= num) {
      if (a === num) {
        return `${num} pertence à sequência de Fibonacci.`;
      }
      c = a + b;
      a = b;
      b = c;
    }
  
    return `${num} não pertence à sequência de Fibonacci.`;
  }
  
  console.log(verificaFibonacci(5)); 
  console.log(verificaFibonacci(8)); 
  console.log(verificaFibonacci(10)); 