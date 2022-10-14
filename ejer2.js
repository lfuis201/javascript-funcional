var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

function sen(x){
    let seno=0;
    for(let i = 0; i < 50; i++){
        seno += Math.pow(-1, i)/factorial(2*i +1)*Math.pow(x, 2*i+1);
    }
    return seno;
}

console.log(Math.sin(Math.PI / 2));
console.log(sen(Math.PI / 2));