const products = [
    {nom : 'EAU VITALYA 5L', code : '21704398', bareCode:'', image:''},
    {nom : 'PACK EAU-MINRA 5l+1', code : '21706062' , bareCode:'', image:''},
    {nom : 'EAU MINERAL 5+1SAISS', code : '21704937', bareCode:'', image:''},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'AIN SAISS', code : '21704937', bareCode:'', image:'', prix:'12.80', Qte:'5L+1'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'AIN SAISS', code : '20300857', bareCode:'', image:'', prix:'2.50', Qte:'0.5'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'AIN SAISS', code : '20300858', bareCode:'', image:'', prix:'4.55', Qte:'1.5'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'SIDI ALI', code : '20300011', bareCode:'', image:'', prix:'2.75', Qte:'0.5'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'SIDI ALI', code : '20300010', bareCode:'', image:'', prix:'4.80', Qte:'1.5'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'SIDI ALI', code : '20300174', bareCode:'', image:'', prix:'1.70', Qte:'0.33'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'SIDI ALI', code : '20300562', bareCode:'', image:'', prix:'5.50', Qte:'2.0'},
    {nomFrance : 'Eau de source naturelle', nomArabe:'', marque : 'ACYL', code : '21705244', bareCode:'', image:'', prix:'4.50', Qte:'1.5'},
    {nomFrance : 'Eaux de table', nomArabe:'', marque : 'BAHIA', code : '20300009', bareCode:'', image:'', prix:'9.95', Qte:'5.0'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'AIN ATLAS', code : '20300085', bareCode:'', image:'', prix:'11.70', Qte:'5.0'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'AIN IFRANE', code : '21705828', bareCode:'', image:'', prix:'10.90', Qte:'5.0'},
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


