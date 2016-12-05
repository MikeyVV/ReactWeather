// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79)
//             reject('City not found')
//         }, 1000)
//     })
// }
//
// getTempPromise('New York').then(function (temp) {
//     console.log('promise success', temp)
// },function (err) {
//     console.log('promise error', err)
// })

// Challenge Area
function addPromise(a, b) {
    //return a+b
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b)
        } else {
            reject('A & B need to be numbers')
        }
    })

    //if a or b is not a number it should reject like 'this or both are not the number'
}

//call 1 with 2 number
addPromise(8, 2).then(function (sum) {
    console.log(sum)
}, function (err) {
    console.log(err)
})
//call just one 1 number
addPromise(8, 'a').then(function (sum) {
    console.log(sum)
}, function (err) {
    console.log(err)
})