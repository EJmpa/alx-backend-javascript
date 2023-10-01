export function taskFirst() {
  const task = 'I prefer const when I can.'; // Use const for variables that don't change
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Use let for variables that can change
  combination += getLast();

  return combination;
}

