require('dotenv').config()
import { NClient } from "./structures/client";

export const client = new NClient();
client.run();

/*
import { Numerade } from "./lib/numerade";


let n = new Numerade({'url': 'https://numerade.com'});

n.search({
  problem: 'A tiger leaps horizontally from a 7.5-m-high rock with a speed of 3.0 m/s. How far from the base of the rock will she land?',
  rate: 5
})
*/

