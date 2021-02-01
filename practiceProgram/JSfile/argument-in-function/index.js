function getFullName(firstName, lastName){
    let fullName = '';
    for(i = 0; i<arguments.length; i++){
        const NamePart = arguments[i];
        fullName = fullName + ' ' + NamePart;
    }
    return fullName;
}
const name = getFullName('Farjana',  'Akter','shima', 'shimu');
console.log(name);
// note arguments alwayes function er vitor korte hoy jemon argument for loop er majhe likhse