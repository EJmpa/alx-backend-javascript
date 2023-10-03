export default function cleanSet(inputSet, startString) {
  const cleanedValues = [];

  inputSet.forEach((value) => {
    if (value.startsWith(startString)) {
      cleanedValues.push(value.substring(startString.length));
    }
  });

  return cleanedValues.join('-');
}
