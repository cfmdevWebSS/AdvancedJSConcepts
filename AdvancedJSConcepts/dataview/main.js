//import modules
import {init, addItem, removeItem} from './modules/data.js';
import create from './modules/list.js';

//create data object
const data = init();

//add items to data object
addItem(data, 'NY', 'New York');
addItem(data, 'MD', 'Maryland');
addItem(data, 'CA', 'California');
addItem(data, 'TX', 'Texas');
addItem(data, 'FL', 'Florida');

//remove an item from data object
removeItem(data, 'FL');

create(data, 'my-data', 'State Abbreviatins');