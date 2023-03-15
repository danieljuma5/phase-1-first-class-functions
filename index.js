//Callback function
function receivesAFunction(spy) {
spy();
}
const spy = function () {
  consolr.log("Are you called yet");
}

function returnsANamedFunction() {
  return function newSpy() {

  }
}
let fn = returnsANamedFunction();


function returnsAnAnonymousFunction() {
  return  () => {};
}
fn = returnsAnAnonymousFunction();