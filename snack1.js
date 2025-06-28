const apiUrlUser = "https://dummyjson.com/users/";
const apiUrlPost = "https://dummyjson.com/posts/"


//ESERCIZIO BASE

// function getPostTitle(id){
//     return new Promise((resolve, reject)=>{
//         fetch(`${apiUrlPost}${id}`)
//         .then(data => data.json())
//         .then(obj=> resolve(obj.title))
//         .catch(err => reject(err))
//     });
// }

// getPostTitle(4)
// .then(title=> console.log(title))
// .catch(err=> console.error(err));    
// function getPostTitle(id){
//     return new Promise((resolve, reject)=>{
//         fetch(`${apiUrlPost}${id}`)
//         .then(data => data.json())
//         .then(obj=> resolve(obj.title))
//         .catch(err => reject(err))
//     });
// }

// getPostTitle(4)
// .then(title=> console.log(title))
// .catch(err=> console.error(err));    


//ESERCIZIO BONUS

function getPostWithUser(id){
    return new Promise((resolve, reject)=>{
        fetch(`${apiUrlPost}${id}`)
        .then(data => data.json())
        .then(post=>{
            fetch(`${apiUrlUser}${post.userId}`)
            .then(res => res.json())
            .then(user => resolve({...post, user}))
            .catch(err=> reject(err));
        })
        .catch(err => reject(err))
    });
}

getPostWithUser(4)
.then(newPost=> console.log(newPost))
.catch(err=> console.error(err));    







// Crea una funzione getPostTitle(id) che accetta un id
//  e restituisce una Promise che recupera il titolo di
//   un post dal link https://dummyjson.com/posts/{id}
// 🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post.
//  Concatena una seconda chiamata che aggiunge una proprietà 
//  user che contiene i dati dell'autore, recuperati dalla chiamata
//   https://dummyjson.com/users/{post.userId}.