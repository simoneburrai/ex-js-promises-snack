const apiUrlUser = "https://dummyjson.com/users/";
const apiUrlPost = "https://dummyjson.com/posts/"

function getPostTitle(id){
    const promise =  new Promise((resolve, reject)=>{
        fetch(`${apiUrlPost}${id}`)
        .then(data => data.json())
        .then(obj=> resolve(obj))
        .catch(err => reject(err))
    });
    
    promise.then(res=> console.log("Titolo del post: ",res.title))
    .catch(err=> console.error(err))
}

getPostTitle(4);







// Crea una funzione getPostTitle(id) che accetta un id
//  e restituisce una Promise che recupera il titolo di
//   un post dal link https://dummyjson.com/posts/{id}
// 🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post.
//  Concatena una seconda chiamata che aggiunge una proprietà 
//  user che contiene i dati dell'autore, recuperati dalla chiamata
//   https://dummyjson.com/users/{post.userId}.