
// importation des produits
import { products } from "./data.js";

console.log(products)
// recuperer l'id ou d'input où il tape l'utilisateur
const inputProduct = document.getElementById('pdt');

// recuperer l'id ou l'on affiche les produits c'est une balise div
const  pdtContainer = document.getElementById('showPdt');


// declaration table vide pour le deuxieme filtre
let pdtX = [];


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
        pdtContainer.textContent = '';
        return
    }else{
            if(inputValue.toString().length >= 2){
// '3 '
// sidialideuxlitre
// SIDI ALI
                pdtX = pdtX.filter((pdt) => 
                    pdt.nomFrance.toLowerCase().includes(inputValue.toLowerCase().split('')[0]) 
                ||  pdt.marque.toLowerCase().includes(inputValue.toLowerCase().split('')[0])
                ||  pdt.code.includes(inputValue.toString().split('')[0])
                ? pdt : ''
                )
                pdtContainer.textContent = '';
                pdtX.map((pdt) => {
                            const tr = document.createElement('tr');
                            const tdNom = document.createElement('td');
                            const tdCode = document.createElement('td');
                            const tdQte = document.createElement('td')
                            
                            tdNom.textContent = pdt.nomFrance;
                            tdCode.textContent = pdt.code;
                            tdQte.textContent = pdt.Qte +'L'
                            
                            
                            tr.appendChild(tdNom);
                            tr.appendChild(tdCode);
                            tr.appendChild(tdQte);
                            pdtContainer.appendChild(tr);
                            
                })


            }else{

            pdtX =
            products.filter((pdt) => 
                pdt.nomFrance.toLowerCase().startsWith(inputValue.toLowerCase()) 
            ||  pdt.marque.toLowerCase().startsWith(inputValue.toLowerCase())
            ||  pdt.code.startsWith(inputValue)
            ? pdt : '')
            if(pdtX[0] == ''){
                return
            }else{

                pdtX.map((pdt) => {
                    const tr = document.createElement('tr');
                    const tdNom = document.createElement('td');
                    const tdCode = document.createElement('td');
                    const tdQte = document.createElement('td')
                    
                    tdNom.textContent = pdt.nomFrance;
                    tdCode.textContent = pdt.code;
                    tdQte.textContent = pdt.Qte +'L'
                    
                    
                    tr.appendChild(tdNom);
                    tr.appendChild(tdCode);
                    tr.appendChild(tdQte);
                    pdtContainer.appendChild(tr);
                    
                })
            }
            }
            }
        }



)


