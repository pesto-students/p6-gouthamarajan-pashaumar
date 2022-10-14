function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();

//here the output is "Count is 0" because function "createIncrement" is executed only once
// so during "createIncrement" execution count was 0
