const valorant = require('valorant-fetch');

(async() => {

let data = await valorant.getMap('split')
console.log(data)

})()