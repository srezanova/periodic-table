function getElectronConfiguration(electronAmount) {
  const result = [];
  let current = { orbital: 's', period: 1, electrons: 0 };
  for (let i = 1; i <= electronAmount; i += 1) {
    current.electrons += 1;
    if (current.electrons > 1) {
      result.push(current);
      current = { orbital: 's', period: 2, electrons: 0 };
    }
    if (current.period > 1 && current.orbital === 's') {
      current = { orbital: 'p', period: current.period, electrons: 0 };
    }
  }

  if (current.electrons > 0) {
    result.push(current);
  }
  return result;
}

// const config = {
//   period: 1,
//   orbital: 's',
//   electrons: 1
// };

console.log(getElectronConfiguration(5));
