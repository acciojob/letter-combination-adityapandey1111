function letterCombinations(digits) {
  //Complete the function
	if (digits.length === 0) {
    return [];
  }

  // Mapping of digit to letters
  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const combinations = [];

  function backtrack(combination, nextDigits) {
    // If there are no more digits to check, add the current combination
    if (nextDigits.length === 0) {
      combinations.push(combination);
    } else {
      // Get the letters corresponding to the current digit
      const letters = digitToLetters[nextDigits[0]];
      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        // Recurse with the remaining digits and the current combination
        backtrack(combination + letter, nextDigits.slice(1));
      }
    }
  }

  backtrack('', digits);
  return combinations;
}

module.exports = letterCombinations;
