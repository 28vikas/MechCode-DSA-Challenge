


let reverse = function(x){

    xCopy = x;
    let rev = 0;

    while(x>0){

        let last = x%10;
        rev = (10*rev) + last;
        x = Math.floor(x/10);
    }

    if(xCopy<0){
        return -rev
    }
    else{
        return rev
    }
}


console.log(reverse(6453))



////////////////// corner case for negative number


let negativeReverse = function (x) {
  xCopy = x;

  x = Math.abs(x);

  let rev = 0;

  while (x > 0) {
    let last = x % 10;
    rev = 10 * rev + last;
    x = Math.floor(x / 10);
  }

  if (xCopy < 0) {
    return -rev;
  } else {
    return rev;
  }
};

console.log(negativeReverse(-1636));