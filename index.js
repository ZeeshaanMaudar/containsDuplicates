const arr = [1,2,3,5,7,8,3];

function containsDuplicates(arr) {
  for(i = 0; i < arr.length; i++) {
    let count = 0;

    for(j = 0; j < arr.length; j++) {
        if(arr[i] == arr[j])
            count++;
    }

    if(count > 1) {
        console.log(arr[i] + ' is the duplicate');
        console.log('true');
        return true;
    }
  }
  console.log('false');
  return false;
}
  

containsDuplicates(arr);
