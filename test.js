    
let produit ={nomFrance : 'Eau de Table', nomArabe: '',marque:'VITALYA', code : '21704398', bareCode:'',prix:'9.90', image:'', Qte:'5.0'};

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let x = 'eau d';
let y = 'Eau de Table'

console.log(x.toLowerCase().trim() == y.toLowerCase()|| y.toLowerCase().includes(x.toLowerCase().trim()))


const monTableau = [12, 1]
function test(array) {
    
    const resultat = array.some((element) => {
        return element > 10; // La condition à tester
    });
    return resultat ? 'true is ':'false is'
}

console.log(test(monTableau))