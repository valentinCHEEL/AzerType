//exo qui permet à l'utilisateur de rentrer 3 mot et permetre de compter sont score 

/*************Sans boucle ***************/
/*
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']

let score = 0
console.log(score)
let entreMot = prompt("entrer le mot :" + listeMots[0])

if(entreMot === listeMots[0]){
    score = score + 1
    console.log(score)
    console.log("Bravo vous avez gagner un point")
}else{
    console.log("vous avez fait une faute")
}

//pour qu'il rentre le deuxieme mot

let entreMot2 = prompt("entrer le mot :" + listeMots[1])

if(entreMot2=== listeMots[1]){
    score = score + 1
    console.log(score)
    console.log("Bravo vous avez gagner un point")
}else{
    console.log("vous avez fait une faute")
}
// 3eme mot

let entreMot3 = prompt("entrer le mot :" + listeMots[2])

if(entreMot3 === listeMots[2]){
    score = score + 1
    console.log(score)
    console.log("Bravo vous avez gagner un point")
}else{
    console.log("vous avez fait une faute")
}
*/

/**********Avec boucle FOR *************/
/*
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']

let score = 0
console.log(score)


for(let i=0; i< listeMots.length; i++){
    let entreMot = prompt("entrer le mot :" + listeMots[i])
        if(entreMot === listeMots[i]){       
            score = score + 1
            console.log(score)
            console.log("Bravo vous avez gagner un point")
        }else{
            console.log("vous avez fait une faute")
            console.log(score)
        }
    }
*/


/*********** avec la boucle while et for *************/
//l'user doit obligatoirement taper le bon mot pour passer à l'etapes suivante 
/*
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']

console.log("Vous devez avoir bon pour obligatoirement passer à l'étape suivante")
let essaie =0
for(i=0; i< listeMots.length; i++ ){
    let mot = prompt("entrer le mot :" + listeMots[i])
        while(mot != listeMots[i]){
            mot = prompt("erreur, réessayer : " + listeMots[i])
            essaie++
        }
    }
console.log("Votre nombre d'erreur est de :"+ essaie)

*/

/**** Demande à l'utilisateur de jouer avec liste de mots ou phrases */

const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
const listePhrases = ['Je nage', 'je range', 'Je vais me doucher']

listePhrases.push('will we win')
console.log(listePhrases)

let score = 0
console.log(score)

let choix= prompt('choisisez de jouer en tapant : phrase ou mot')

//console.log(choix)

if(choix=== "mot"){
    console.log("vous avez choisi les mots")
        for(let i=0; i< listeMots.length; i++){
            let entreMot = prompt("entrer le mot :" + listeMots[i])
                if(entreMot === listeMots[i]){       
                    score = score + 1
                    console.log(score)
                    console.log("Bravo vous avez gagner un point")
                }else{
                    console.log("vous avez fait une faute")
                    console.log(score)
                }
            }
}else{
    console.log("vous avez choisi les phrases")
        for(let i=0; i< listePhrases.length; i++){
            let entreMot = prompt("entrer le mot :" + listePhrases[i])
                if(entreMot === listePhrases[i]){       
                    score = score + 1
                    console.log(score)
                    console.log("Bravo vous avez gagner un point")
                }else{
                    console.log("vous avez fait une faute")
                    console.log(score)
                }
            }
}