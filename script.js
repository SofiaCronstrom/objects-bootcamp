// ///BIBBLAN
// //1.
// let book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     numPages: 281
// };
// //2.
// let books = [
//     { title: "To Kill a Mockingbird", author: "Harper Lee", numPages: 281 },
//     { title: "1984", author: "George Orwell", numPages: 328 },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numPages: 180 },
//     { title: "The Catcher in the Rye", author: "J.D. Salinger", numPages: 214 }
// ];
// //.3
// function findBookByTitle(booksArray, searchTitle) {
//     for (let i in booksArray) {
//         if (booksArray[i].title === searchTitle) {
//             return booksArray[i].title;
//         }
//     }
//     return null;
// }

// console.log(findBookByTitle(books, "hej hopp"))

////LETTER FREQUENCY


function lettersToCount(str){
    
    let obj = {};

    for (let char of str){
       if (obj[char]){
        obj[char]++
       } else{
        obj[char] = 1;
       }
    }
    return obj;
}

let letterFreq = lettersToCount("det var en gång en liten kanin som hette Hoppsan");

console.log(letterFreq);