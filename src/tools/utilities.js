// Fisher-Yates-Knuth shuffle algorithm
export const shuffle = (a) => {
  
  let ii = a.length;

  while (ii) {
    const jj = Math.floor(Math.random() * ii--);
    [a[ii], a[jj]] = [a[jj], a[ii]];
  }  

  return a; // for chaining
};