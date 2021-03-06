import React from 'react';
import SelectInput from './SelectInput';
import PlayButton from './PlayButton';

function Main() {
  const operations = ['+', 'x', '/', '-'];
  const numbers = [];
  for (let number = 0; number <= 100; number++){
    numbers.push(number);
  }
  return(
    <main>
      <SelectInput label="Operation" id="operation"
        values={operations} />
      <SelectInput label="Maximum Number" id="max-number"
        values={numbers} />
      <PlayButton />
    </main>
  )
}

export default Main;