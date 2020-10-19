const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  } else if (str1 === '' && str2 === '') {
    return true;
  }

  freqCounter1 = {};
  freqCounter2 = {};

  for (let val of str1) {
    freqCounter1[val] = (freqCounter1[val] || 1) + 1;
  }

  for (let val of str2) {
    freqCounter2[val] = (freqCounter2[val] || 1) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }

    if (freqCounter2[key] !== freqCounter1[key]) {
      return false;
    }
  }

  return true;
};

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true
