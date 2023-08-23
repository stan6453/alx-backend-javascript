module.exports = function calculateNumber(type, a, b) {
  const localA = Math.round(a), localB = Math.round(b);
  switch (type) {
    case 'SUM':
      return localA + localB;
    case 'SUBTRACT':
      return localA - localB;
    case 'DIVIDE':
      return localB === 0 ? 'Error' : localA / localB;
  }
}
