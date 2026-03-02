const products = [
    {nomFrance : 'Eau de Table', nomArabe: '',marque:'VITALYA', code : '21704398', bareCode:'',prix:'9.90', image:'', Qte:'5.0'},
    {nomFrance : 'PACK EAU-MINRA 5l+1', nomArabe : '',marque:'AIN SAISS', code : '21706062' , bareCode:'', image:'', prix: '23.90', Qte:'6x2'},
    {nomFrance : 'EAU MINERAL 5+1SAISS',nomArabe:'',marque:'AIN SAISS', code : '21704937', bareCode:'', image:'', prix:'12.80', Qte:'5L+1'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'AIN SAISS', code : '20300857', bareCode:'', image:'', prix:'2.50', Qte:'0.5'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'AIN SAISS', code : '20300858', bareCode:'', image:'', prix:'4.55', Qte:'1.5'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'SIDI ALI', code : '20300011', bareCode:'', image:'', prix:'2.75', Qte:'0.5'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'SIDI ALI', code : '20300010', bareCode:'', image:'', prix:'4.80', Qte:'1.5'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'SIDI ALI', code : '20300174', bareCode:'', image:'', prix:'1.70', Qte:'0.33C'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'SIDI ALI', code : '20300562', bareCode:'', image:'', prix:'5.50', Qte:'2.0'},
    {nomFrance : 'Eau de source naturelle', nomArabe:'', marque : 'ACYL', code : '21705244', bareCode:'', image:'', prix:'4.50', Qte:'1.5'},
    {nomFrance : 'Eaux de table', nomArabe:'', marque : 'BAHIA', code : '20300009', bareCode:'', image:'', prix:'9.95', Qte:'5.0'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'AIN ATLAS', code : '20300085', bareCode:'', image:'', prix:'11.70', Qte:'5.0'},
    {nomFrance : 'Eau minérale naturelle', nomArabe:'', marque : 'AIN IFRANE', code : '21705828', bareCode:'', image:'', prix:'10.90', Qte:'5.0'},
]

const  pdtContainer = document.getElementById('showPdt');

let x = 'vitalya 5l'
let y = 'vitalya'
x = x.split(' ') 
console.log(x)
console.log(y.startsWith(x[0]))
const inputProduct = document.getElementById('pdt');

let pdtX = '';

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

                pdtX = pdtX.filter((pdt) => 
                    pdt.nomFrance.toLowerCase().startsWith(inputValue.toLowerCase().split(' ')[0]) 
                ||  pdt.marque.toLowerCase().startsWith(inputValue.toLowerCase().split(' ')[0])
                ||  pdt.code.startsWith(inputValue)
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
                pdt.nomFrance.toLowerCase().startsWith(inputValue.toLowerCase().split(' ')[0]) 
            ||  pdt.marque.toLowerCase().startsWith(inputValue.toLowerCase().split(' ')[0])
            ||  pdt.code.startsWith(inputValue)
            ? pdt : '')
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



)


