



    //return permet d'utiliser le résultat plus tard en dehors de la function
    function afficherResultat(score, nbQuestion){
        // pour selectionner la zone sur la page html ou on veut afficher le score
        let spanScore = document.querySelector (".zoneScore span")
        //On affiche le résultat du joueur
        console.log("Votre score est de:" +score+ "sur" +nbQuestion)
        //on recupere le score a afficher 
        let afficherScore = `${score} / ${nbQuestion}`
        //on affiche le score dans la page html

        spanScore.innerText = afficherScore
    } 
//

    function afficherProposition(proposition){
        let zoneProposition = document.querySelector(".zoneProposition")
        zoneProposition.innerText = proposition

    }

    function lancerJeu(){
        //initialisation
        let score = 0
        let nbQuestion = 0
        let i = 0

        let btnValiderMot = document.getElementById("btnValiderMot")
        let inputEcriture = document.getElementById("inputEcriture")
        
        afficherProposition(listeMots [i])

        btnValiderMot.addEventListener("click", () => {
            //console.log("J'ai cliquer")
            // recuperer le mot ecrit par l'utilisateur
            //console.log(inputEcriture.value)

            if(inputEcriture.value === listeMots[i]){
                score ++
            }
            afficherResultat(score, i)
            i ++
            inputEcriture.value = ''
            if(listeMots[i] === undefined){
                afficherProposition("Le jeu est fini")
                btnValiderMot.disabled = true
            }else{
            afficherProposition(listeMots [i])
            }
        }) 

        afficherResultat(score, i)
    }

