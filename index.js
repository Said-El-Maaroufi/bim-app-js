const products = [
    {nom : 'pain de mie complet', code : '20400571'},
    {nom : 'pain de mie nature', code : '20400572'},
]

const  pdtContainer = document.getElementById('showPdt');


const inputProduct = document.getElementById('pdt');

let pdtX = '';


inputProduct.addEventListener('input' , (event) => {
    let inputValue =  event.target.value; //20

    if(inputValue == ''){
        pdtContainer.textContent = ''; 
        return
    }else{

            pdtX = products.filter((pdt) => pdt.nom.startsWith(inputValue) || pdt.code.startsWith(inputValue) ? pdt : '')
            if(pdtX == ''){
                return
            }else{
                
                if(pdtX.length == 1){
                        pdtX.map((pdt) => {
                            const tr = document.createElement('tr');
                            const tdNom = document.createElement('td');
                            const tdCode = document.createElement('td');

                            tdNom.textContent = pdt.nom;
                            tdCode.textContent = pdt.code;


                            tr.appendChild(tdNom);
                            tr.appendChild(tdCode);
                            pdtContainer.appendChild(tr);
                        })
                    }else{
                pdtX = pdtX.filter((pdt) => pdt.nom.startsWith(inputValue) || pdt.code.startsWith(inputValue) ? pdt : '')
                    }
            }
}
}

)