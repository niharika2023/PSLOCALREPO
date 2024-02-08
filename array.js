function findSum(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    
    return sum;
  }

  const numbers = [2,3,42,1];
  const result = findSum(numbers);
  console.log('Sum:', result); 
  