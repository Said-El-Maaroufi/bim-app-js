const products = [
    {nom : 'pain de mie complet', code : '20400571'},
    {nom : 'pain de mie nature', code : '20400572'},
]

const  pdtContainer = document.getElementById('showPdt');


const inputProduct = document.getElementById('pdt');

let pdtX = '';

console.log(pdtX)


let x = 20400571;
let y = '20400571'
console.log(y.startsWith(x))
console.log(x)

inputProduct.addEventListener('input' , (event) => {
    let inputValue =  event.target.value; //20

    if(inputValue == ''){
        pdtContainer.textContent = '';
        return
    }else{
//2040057
        if(inputValue.toString().length >= 2 ){
            pdtX = products.filter((pdt) => pdt.nom.startsWith(inputValue) || pdt.code.startsWith(inputValue) ? pdt : '')
            pdtContainer.textContent = '';
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

                
                
                pdtX = products.filter((pdt) => pdt.nom.startsWith(inputValue) || pdt.code.startsWith(inputValue) ? pdt : '')
                
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
                // for (let i = 0; index < pdtX.length; i++) {
                }
            }
                    
                //     pdtX = pdtX.filter((pdt) => pdt.nom.startsWith(inputValue) || pdt.code.startsWith(inputValue) ? pdt : '')
                    
                //     if(pdtX.length == 1){
                //        
                //     }
                //     }w
                    
            }



)