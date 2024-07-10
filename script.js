// ///BIBBLAN
// //1.
// const book = {
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

// function lettersToCount(str){
    
//     let obj = {};

//     for (let char of str){
//        if (obj[char]){
//         obj[char]++
//        } else{
//         obj[char] = 1;
//        }
//     }
//     return obj;
// }

// let letterFreq = lettersToCount("det var en gång en liten kanin som hette Hoppsan");

// console.log(letterFreq);


////Filter By Country
// function filterUsersByAreaCode (users, areaCode){

//    return users.filter( user => user.nat === areaCode);
// }
// let nationality = "FR"
// let usersByNationality = filterUsersByAreaCode(users, nationality);

// console.log(usersByNationality)

////Filter by email
// function usersEmail (users){

//     return users.map( user => user.email);
//  }
//  let emailAdresses = usersEmail(users);
 
 
//  console.log(emailAdresses);

////Reformat emails

function changeEmails(users) {
    return users.map(user => {
        let newEmail = `${user.name.last}.${user.name.first}@evilcorp.${user.nat}`;
        return newEmail.toLowerCase().replace(/\s/g, "");
    });
}

// Exempel på hur man använder funktionen
let newEmails = changeEmails(users);
console.log(newEmails);




