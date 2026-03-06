
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

            const tr = document.createElement('tr');
            const tdNom = document.createElement('td');
            const tdCode = document.createElement('td');
            const tdQte = document.createElement('td');
            const tdMarque = document.createElement('td');
            

            tdNom.textContent = produit.nomFrance;
            tdCode.textContent = produit.code;
            tdQte.textContent = produit.Qte;
            tdMarque.textContent = produit.marque

            tr.appendChild(tdNom)
            tr.appendChild(tdCode)
            tr.appendChild(tdQte)
            tr.appendChild(tdMarque)

            pdtContainer.appendChild(tr)
            
        })
        
        }
    }
)

