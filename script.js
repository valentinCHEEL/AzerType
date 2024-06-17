//exo qui permet à l'utilisateur de rentrer 3 mot et permetre de compter sont score 

/**********Avec boucle FOR *************/
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']

let score = 0
console.log(score)


for(let i=0; i<3; i++){
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