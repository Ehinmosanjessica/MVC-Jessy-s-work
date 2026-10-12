const fs = require('fs');

// const content = "This is a new file created with love and honesty.";

// fs.writeFile('newFile.txt', content, (err) =>{
//     if (err) {
//         console.log(`Error writting file:`, err);
//         return;
//     }

//     console.log(`New file created successfully`);
// });


fs.writeFile('newDB.json', JSON.stringify([]), (err) =>{
    if (err) {
        console.log(`Error writting file:`, err);
        return;
    }
    console.log(`File written successfully`);
});



const newData = JSON.stringify([
    {
        id:1,
        name: "Jacob",
        gender: "Male"
    },

    {
        id : 2,
        name : " Ruth",
        gender : "Female"
    }
]);


fs.writeFile('newDB.json', newData, (err) =>{
    if (err) {
        console.log(`Error writting File:`, err);
        return;
    }
    console.log(`File written successfully`);
});




const myName = `\nI love coding, but I don't know why I'm getting an error`;

fs.appendFile('newFile.txt', myName, (err) => {
    if (err) {
        console.log(`Error appending File:`, err);
        return;
    }
    console.log(`File appended successfully`);
});