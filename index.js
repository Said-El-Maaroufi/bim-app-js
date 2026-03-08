
// importation des produits
import { products } from "./data.js";

// recuperer l'id ou d'input où il tape l'utilisateur
const inputProduct = document.getElementById('pdt');

// recuperer l'id ou l'on affiche les produits c'est une balise div
const  pdtContainer = document.getElementById('showPdt');


// declaration table vide pour le deuxieme filtre

console.log('im out')


inputProduct.addEventListener('input' , (event) => {
    console.log('im in')

    let inputValue =  event.target.value; //20
    
    // ain
    /*{
        nomFrance : 'Eau de Table',
        nomArabe: '',
        marque:'VITALYA', 
        code : '21704398', 
        bareCode:'',
        prix:'9.90', 
        image:'', 
        Qte:'5.0'},

    */

    if(inputValue == ''){
        //en cas d'affichage des produits et apres si l'utilisateur vide l'input le container il faut devenir vide
        pdtContainer.textContent = '';
        console.log('im in the input value')
    }else{
        //declaration d'un variable produitsFiltre pour storer les produits filtrer 
        let pdtsFlt = [];

        products.filter((produit) => {
            let resultat = Object.values(produit).some((values) => {
                console.log(values)
                return values.startsWith(inputValue)
            })
            if(resultat){
                pdtsFlt.push(produit)
            }
            


        } )

        pdtsFlt.map((produit) => {
            const divParent = document.createElement('div');
            divParent.className = 'card w-50';
            divParent.innerHTML = 
            `
            <img  src="" alt="BIM" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${produit.code}</h5>
            <p class="card-text">${produit.nomFrance}</p>
            </div>
            `

            pdtContainer.appendChild(divParent)
            
        })
        
        }
    }
)

