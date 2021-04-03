// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name) {
  // let driversCopy = drivers.slice(0);
  // driversCopy.push(name);
  // return driversCopy;  

  return [...drivers, name];
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeLastDriver() {
  let limit = drivers.length -1;
  return drivers.slice(0,limit);
}

function removeFirstDriver(){
  return drivers.slice(1);
}