import React from 'react';
import SelectInput from './childComponents/SelectInput';
import PlayButton from './childComponents/PlayButton';

function Main() {
    const operations = ['+', 'x', '/', '-'];
    const numbers = [];

    for (let number = 2; number <= 100; number++) {
        numbers.push(number);
    }

    return (
        <main>
            <SelectInput label="Operation" id="operation" values={operations} />
            <SelectInput label="Maximum Number" id="max-number" values={numbers} />
            <PlayButton />
        </main>
    )
}

export default Main;