
// importation des produits
import { products } from "./data.js";

// recuperer l'id ou d'input où il tape l'utilisateur
const inputProduct = document.getElementById('pdt');

// recuperer l'id ou l'on affiche les produits c'est une balise div
const  pdtContainer = document.getElementById('showPdt');


// declaration table vide pour le deuxieme filtre


products.map((produit) => {
            const divParent = document.createElement('div');
            divParent.innerHTML = 
            `
                <div class=" col-12 col-md-6 col-lg-4">

                    <div class="card text-center">
                        <div class="ratio ratio-21x9">
                            <img  src="${produit.image}" alt="BIM-IMAGE" class="card-img-top object-fit-contain" >
                        </div>
                    <div class="card-body">
                        <h3 class="card-title"><span class="badge bg-warning text-dark  rounded-pill">${produit.code}</span></h3>
                        <p class="card-text">${produit.nomFrance}</p>
                        <span>${produit.Qte}</span>|
                        <span class="text-danger">${produit.prix}</span>
                    </div> 
                    </div>
                </div>
            

            `

            /*
            { 
  nomFrance: "Diffuseur de parfum", 
  nomArabe: "معطر الجو", 
  marque: "ETEREA REED", 
  code: "21706120", 
  bareCode: "", 
  image: "", 
  prix: "27.90", 
  Qte: "100 ml" 
}
            */

            pdtContainer.appendChild(divParent)
            
        })


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

        pdtsFlt = products.filter((produit) => {
            let resultat = Object.values(produit).some((values) => {
                // filtrage des valeurs fait par deux norme
                return values.toLowerCase().includes(inputValue.toLowerCase().trim()) || values.toLowerCase() == inputValue.toLowerCase().trim()
            })
            return resultat ? produit : ''
        } )
        // apres chaque parcour d'un element il faut vider le terain d'affichage
        pdtContainer.textContent = '';
        pdtsFlt.map((produit) => {
            const divParent = document.createElement('div');
            divParent.className = 'row';
            divParent.style.width = '18rem';
            divParent.innerHTML = 
            `
                <div class=" col-12 col-md-6 col-lg-4">

                    <div class="card text-center">
                        <div class="ratio ratio-21x9">
                            <img  src="${produit.image}" alt="BIM-IMAGE" class="card-img-top object-fit-contain" >
                        </div>
                    <div class="card-body">
                        <h3 class="card-title"><span class="badge bg-warning text-dark  rounded-pill">${produit.code}</span></h3>
                        <p class="card-text">${produit.nomFrance}</p>
                        <span >${produit.Qte}</span>|
                        <span class="text-danger">${produit.prix}</span>
                        
                    </div> 
                    </div>
                </div>
            

            `

            /*
            { 
  nomFrance: "Diffuseur de parfum", 
  nomArabe: "معطر الجو", 
  marque: "ETEREA REED", 
  code: "21706120", 
  bareCode: "", 
  image: "", 
  prix: "27.90", 
  Qte: "100 ml" 
}
            */

            pdtContainer.appendChild(divParent)
            
        })
        
        }
    }
)

