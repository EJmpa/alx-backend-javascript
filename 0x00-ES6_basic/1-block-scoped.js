/* eslint-disable no-unused-vars */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;   // Inner const task shadows the outer task
    const task2 = false; // Inner const task2 shadows the outer task2
  }

  return [task, task2];
}
/* eslint-enable no-unused-vars */
