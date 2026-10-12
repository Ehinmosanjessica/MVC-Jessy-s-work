// const names = ['naomi', 'bright', 'chikodi', 'jessica', 'elijah', 'omotayo', 'victor','naomi', 'naomi', 'emmanuel'];

// const result = names.filter((element) => element === 'naomi' || element === 'emmanuel')

// const arrow = (element) = > {
//     return element === 'naomi' || element === 'emmanuel'
// }

// console.log('Result', result)




// const check = (string) => {
//     return string.includes('t')
// }

// console.log(names.filter(check))


// const transform = (data) => {
//     return data.startsWith('e')
// }

// const result = names.filter(transfor)
// console.log('Result', result)




// const name = 'ikechuKwu';
// // const firstLetter = name.slice(0,1)
// // const updatedFirstLetter = firstLetter.toUpperCase()
// const firstLetter = name.slice(0,1).toUpperCase()
// console.log(firstLetter )

// const remainingLetters = name.slice(1).toLowerCase()
// console.log(remainingLetters)

// console.log ('Result:', firstLetter + remainingLetters)




// const titleCase = (string) =>{
//     const trimmed = string.trim();
//     return `${trimmed.slice(0,1).toUpperCase()}${trimmed.slice(1).toLowerCase()}`
// }

// console.log(titleCase('   SANDRA    '))


// const result = names.map(titleCase)
// console.log("Result:", result)


// // Promises

// let run = false;


//  const promise = new Promise((resolve, reject) => {
// setTimeout(() => {
//     if (run == true) {
//         resolve(result)
//     } else {
//         reject('Could not perform operation')
//     }
// }, 4000)
//  })

// const promise = new Promise((resolve, reject) => {
//  if (run == true) {
//     resolve (result)
//  }else {
//     reject('Could not perform operation')
//  }
// })

// promise.then((data) => console.log(data))
// .catch((err) => console.log(err))
// .finally(() => console.log('Promise Ran Successfully'))

// const fs = require('fs');

// fs.writeFile('./text.txt',`${names}`, (err, data) => {
//     if (err) {
//         console.log('Error writing to file')
//     }else {
//         console.log('File written Successfully')
//     }
// })


// const readFile = (path) => {
//     fs.readFile(path, 'utf8', (err, data) => {
//         if (err) {
//             console.log('Error reading file')
//         }else {
//              console.log(data)
//         }
//     })
// }

// readFile('./text.txt')


// const readFile = (path) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             fs.readFile(path, 'Utf8', (err, data) => {
//                 if (err) {
//                     reject('Fail to read file') 
//                 }else {
//                     resolve(data)
//                 }
//             })
//         }, 3000)
//     })
// }


// readFile('./text.txt')
// .then((data) => console.log(data))
// .catch((e) => console.log(e))


// Async Await

// const runCode = async () => {
// try {
//     const data = await readFile('./taiwo.txt');
//     console.log(data)
// }
// }

// }



// 