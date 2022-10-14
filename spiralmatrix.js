function isEven ( num ) { return ( num %2 == 0) ; }

function createSpiral(n) {

  let spiral = createSpiral(n-2);
  
  
  let start = n*(n-1);

  let end = (n-2)*(n-2) + 1;

  for (let row of spiral) {
      row.unshift(start--);
      row.push(end++);
  }
  start = n*(n-1)+1;
  spiral.unshift(spiral[0].map(() => start++));
  end = n*(n-2)+2;
  spiral.push(spiral[0].map(() => end--));
  return spiral;
}

// I/O handling

console.log(createSpiral(4));

function printDiagonalSums(mat, n)
{
    let principal = 0, secondary = 0;
    let x;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
 
            // Condition for principal diagonal
            if (i == j)
                principal += mat[i][j];
 
            // Condition for secondary diagonal
            if ((i + j) == (n - 1))
                secondary += mat[i][j];
        }
    }

    if (n%2==0){
      x=0;
    }else{
      x=1
    }
  
    return principal + secondary-x;
}

console.log(printDiagonalSums(createSpiral(4), 4));