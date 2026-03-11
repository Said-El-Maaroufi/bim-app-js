
// importation des produits
import { products } from "./data.js";

// recuperer l'id ou d'input où il tape l'utilisateur
const inputProduct = document.getElementById('pdt');

// recuperer l'id ou l'on affiche les produits c'est une balise div
const  pdtContainer = document.getElementById('showPdt');


// declaration table vide pour le deuxieme filtre



inputProduct.addEventListener('input' , (event) => {

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
    }else{
        //declaration d'un variable produitsFiltre pour storer les produits filtrer 
        let pdtsFlt = [];

        products.filter((produit) => {
            let resultat = Object.values(produit).some((values) => {
                // filtrage des valeurs fait par deux norme
                return values.toLowerCase().includes(inputValue.toLowerCase().trim()) || values.toLowerCase() == inputValue.toLowerCase().trim()
            })
            console.log('im in the filter function')
            return resultat ? pdtsFlt.push(produit) : ''
        } )

        pdtsFlt.map((produit) => {
            const divParent = document.createElement('div');
            divParent.className = 'card flex-grow-1';
            divParent.style.width = '18rem';
            divParent.style.maxWidth = '350px';
            divParent.innerHTML = 
            `
            <img  src="" alt="BIM-IMAGE" class="">
            <div class="card-body">
                <h5 class="card-title">${produit.code}</h5>
                <p class="card-text">${produit.nomFrance}</p>
                <h4>${produit.marque}</h4>
                <div class="d-flex justify-content-between">
                    <h6>${produit.Qte}</h6>
                    <h6 class="text-danger">${produit.prix} DH</h6>
                </div>
                <a href="#"  class="btn btn-primary">Plus</a>
            </div>
            `

            pdtContainer.appendChild(divParent)
            
        })
        
        }
    }
)

