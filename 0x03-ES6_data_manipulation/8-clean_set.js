function cleanSet(set, startString) {
  // Use the spread operator (...) to convert the Set to an array.
  const setArray = [...set];

  // Use filter() to keep only the values that start with the specified startString.
  const filteredArray = setArray.filter((value) => value.startsWith(startString));

  // Use map() to extract the part of each value that comes after startString.
  const cleanedArray = filteredArray.map((value) => value.substring(startString.length));

  // Use join() to concatenate the cleaned values with '-' as the separator.
  const resultString = cleanedArray.join('-');

  return resultString;
}

export default cleanSet;
