function hasValuesFromArray(set, array) {
  // Use the every() method to check if every element in the array exists in the set.
  return array.every((element) => set.has(element));
}

export default hasValuesFromArray;
