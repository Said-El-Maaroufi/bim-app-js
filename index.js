const products = [
    {nom : 'EAU VITALYA 5L', code : '21704398', bareCode:'', image:''},
    {nom : 'PACK EAU-MINRA 5l+1', code : '21706062' , bareCode:'', image:''},
    {nom : 'EAU MINERAL 5+1SAISS', code : '21704937', bareCode:'', image:''},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'AIN SAISS', code : '21704937', bareCode:'', image:'', prix:'12.80', Qte:'5L+1'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'SIDI ALI', code : '20300011', bareCode:'', image:'', prix:'', Qte:'0.5'},
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
            pdtX = products.filter((pdt) => pdt.nom.startsWith(inputValue) ? pdt : '')
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
            }
        }



)


