// Crea la funzione lanciaDado() che restituisce una Promise che,
//  dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, 
//  nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure 
// che memorizza l'ultimo risultato. Se il numero esce due volte di fila, 
// stampa "Incredibile!"

function lanciaDado(){
    const promise = new Promise((resolve, reject)=>{
        let casualNumber = 0;
        setTimeout(()=>{
            const newCasualNumber = Math.round((Math.random() * 5) + 1) ;
            const percentageNumber = Math.round((Math.random() * 4) + 1);
            if(percentageNumber===1){ //20% possibilità dado incastrato!
                reject("Errore, dado incastrato")
            }else{
                if(casualNumber===newCasualNumber){
                    resolve("Incredibile")
                }else{
                    resolve(`Il numero del dado è ${casualNumber}`);
                }
                
            }
            casualNumber = newCasualNumber;
        }, 3000)
    })
    
    promise.then(res => console.log(res))
    .catch(err=> console.log(err));
    return promise;
}

lanciaDado();
setInterval(lanciaDado, 2000);