// "Lighthouse in the house"
var target = String(process.argv.slice(2));
console.log(typeof(target));
function charPosition (target) {
  var product = {};
  for (i of target) {
    product[i] = [];
    for (var j = 0; j < target.length; j++) {
      if (i === target[j]) {
        product[i].push(j);
      }
    }
  }
  console.log(product);
}
charPosition(target);
