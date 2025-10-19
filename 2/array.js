//Колекції (масив)

const phoneBook = [
    { name: 'Polina' , phone: '+380638080333' },
    { name: 'Tako' , phone: '+380986380333' },
    { name: 'Bluk' , phone: '+380666080333' }
]  

const findPhoneByName = (findName) => {
   for (const {name, phone} of phoneBook) {
       if (findName === name) console.log(phone);
   }
}

findPhoneByName('Tako');
findPhoneByName('Polina');
findPhoneByName('Bluk');
