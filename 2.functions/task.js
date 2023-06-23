function getArrayParams(...arr) {
  min = arr[0];
  max = arr[0];
  let summ = 0;

  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  avg = parseFloat((summ / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
     summ += arr[i];
   }
   return summ;
}

function differenceMaxMinWorker(...arr) {
  min = arr[0];
  max = arr[0];
  
if (!arr.length) { 
  return 0;
}

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  differenceMaxMin = max - min;
  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value % 2) {
      sumOddElement += value;
    } else {
      sumEvenElement += value;
    }
  }
  difference = sumEvenElement - sumOddElement
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (!arr.length) { 
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArrs, func) {
  let maxValue = func(...arrOfArrs[0]);
  for (let i = 1; i < arrOfArrs.length; i++){
    const currentValue = func(...arrOfArrs[i]);
    if(currentValue > maxValue) {
      maxValue = currentValue;
    }
  }
  return maxValue;
}
