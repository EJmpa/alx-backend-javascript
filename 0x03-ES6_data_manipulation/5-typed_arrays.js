function createInt8TypedArray(length, position, value) {
  // Check if the specified position is outside the valid range.
  if (position < 0 || position >= length) {
    // If it's outside the range, throw an error.
    throw new Error('Position outside range');
  }

  // Create a new "container" for our data called an ArrayBuffer.
  const buffer = new ArrayBuffer(length);

  // Create a view of the ArrayBuffer that allows us to read and write data.
  const view = new DataView(buffer);

  // Set the Int8 value (a small whole number) at the specified position in the view.
  view.setInt8(position, value);

  // Return the DataView with the updated data.
  return view;
}

export default createInt8TypedArray;
