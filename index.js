const fs = require('fs')
const file = JSON.parse(fs.readFileSync('input.json'))
const _ = require('lodash')

// Flatten everything.
let arr = []
for (key in file) {
  arr.push(file[key])
}

// Iterate over the counts
var r = {};
_.flatten(arr).forEach(function(o){
  r[o.login] = (r[o.login] || 0) + o.count;
})

// Bring back the old objects
var result = Object.keys(r).map((k) => {
  let oldObj = _.find(_.flatten(arr), i => i.login = k)
  return { login: k, name: oldObj.name, url: oldObj.url, count: parseInt(r[k]) }
});

let newList = _.reverse(_.sortBy(result, 'count'))

console.log(newList)

// TODO: Get email from users

