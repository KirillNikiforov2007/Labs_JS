
const phoneBook = {
    'Polina': '+380638080333',
    'Tako': '+380986380333',
    'Bluk': '+380666080333'
}

const findPhoneByName = (name) => {
    return phoneBook[name]; 
}

console.log(findPhoneByName('Bluk'));
console.log(findPhoneByName('Polina'));
console.log(findPhoneByName('Tako'));
