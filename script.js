let btnplus = document.querySelector ('.qté_plus');
let btnmoins = document.querySelector ('.qté_moins');
let addBtn = document.querySelector('.addBtn');
let Nom = document.querySelector ('.Nom_produit');
let Prix = document.querySelector ('.Prix_produit');


btnplus.addEventListener("click", () =>{
    document.querySelector(".qté").value = parseInt (document.querySelector('.qté').value) +1;
    Sous_total();
});

btnmoins.addEventListener('click', () =>{
    if(document.querySelector('.qté').value >0){
        document.querySelector('.qté').value = parseInt (document.querySelector(".qté").value) -1;
    Sous_total();
    }
});
function Sous_total(){
    let Prix = parseInt(document.querySelector('.Prix'). innerText);
    let qté = parseInt(document.querySelector('.qté').value);
    let Sous_total = Prix*qté;

    document.querySelector ('.Sous_total').innerText = Sous_total + 'Fr';
};
addBtn.addEventListener('click', () =>{
    document.querySelector ('.Tous_les_produits').innerHTML= document.querySelector('.Tous_les_produits').innerHTML
    loadNewElement();
});
function loadNewElement(){
    btnplus.addEventListener("click", () =>{
        document.querySelector(".qté").value = parseInt (document.querySelector('.qté').value) +1;
        Sous_total();
    });
    
    btnmoins.addEventListener('click', () =>{
        if(document.querySelector('.qté').value >0){
            document.querySelector('.qté').value = parseInt (document.querySelector(".qté").value) -1;
        Sous_total();
        }
    });
}
 
