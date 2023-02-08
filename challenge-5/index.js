/*
    Crear un sistema que permita emitir este esquema de salida:

    foo -> 1-1
    foozi -> 1-1_1
    fooziman -> 1-1_1-1_
    foo bar -> 1-1*_1-
*/

const dic = { foo: "1-1", zi: "_1", " ": "*", man: "-1_", bar: "_1-" };

function output(str) {
  let result = "";
  for (let key in dic) {
    if (str.includes(key)) {
      result += dic[key];
      str = str.replace(key, "");
    }
  }
  return result;
}

console.log(output("foo"));
console.log(output("foozi"));
console.log(output("fooziman"));
console.log(output("foo bar"));
