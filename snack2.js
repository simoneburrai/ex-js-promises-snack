// Crea la funzione lanciaDado() che restituisce una Promise che,
//  dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, 
//  nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure 
// che memorizza l'ultimo risultato. Se il numero esce due volte di fila, 
// stampa "Incredibile!"


function createThrowDice(){

    let lastDiceThrow = null;

    return ()=>{
        return new Promise((resolve, reject)=>{
            console.log("Sto lanciando il dado...");
            setTimeout(()=>{
                const isDiceStuck = Math.random() < 0.2;
            if(isDiceStuck){
                lastDiceThrow = null;
                reject("Il dado si è incastrato");
            }else{
                const diceThrow = Math.floor(Math.random() * 6) + 1;
                resolve(`Il risultato del dado è ${diceThrow}`);
                if(lastDiceThrow === diceThrow){
                    console.log("Incredibile!!")
                }
                lastDiceThrow = diceThrow;
            }
            }, 3000)
        })
    }
}

const diceThrowing = createThrowDice();


setInterval(()=>{
    diceThrowing()
    .then(res => console.log(res))
    .catch(err => console.log(err));

}, 3000)
