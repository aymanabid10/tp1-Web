
let Game

function onLoad(){
    select = document.getElementById("l");
    l = select.options.length
    Game = Array.from(select.options).map((option, index) => ({
        begin: 0, 
        end: (l-index)*5, 
        tent: l - index + 1
    }));
}
function start(){    
    ind = document.getElementById("l").selectedIndex;
    document.getElementById("interval").innerHTML = `${Game[ind].begin} et ${Game[ind].end}, vous avez en total : ${Game[ind].tent}`;
    return [ind, Game[ind].tent,l];
}
function playGame(){
    s = start();
    ind = s[0]
    x = Math.floor(Math.random() * Game[ind].end);
    essai = document.getElementById("essai").value;
    if(isNaN(essai) || essai < 0 || essai > Game[ind].end || essai == ""){
        alert("le nombre est n'est pas valide");
        return false;
    }
    if(Game[ind].tent!= 0 && x == parseInt(essai)){
        alert("vous avez gangé !");
        start();
    }else{
        Game[ind].tent-- ;
        alert(`vous avez perdu ! \nIl vous reste ${Game[ind].tent} Tentatives.`);
        if(Game[ind].tent == 0){
            alert("Le jeu est terminé, essayer de nouveau !");
            document.getElementById("interval").innerHTML = `${Game[ind].begin} et ${Game[ind].end}, vous avez en total : ${Game[ind].tent}`;
            Game[ind].tent = s[2] - ind + 1;
        }
    }
}

window.addEventListener("load", ()=>{
    onLoad();
    start();
});
document.getElementById("dev").addEventListener("click", playGame);
document.getElementById("l").addEventListener("change", start);