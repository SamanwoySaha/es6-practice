const person = { name: 'Jack William', age: 27, job: 'Freelancer', phone: 01238470329};
const {phone, name} = person;
console.log(phone);
console.log(name);

const complexObj = { 
    name: 'kalu',
    info: {
        address: 'kola bagan',
        leader: 'tiger leader',
    }
};

const { leader } = complexObj.info;
console.log(leader);


const friends = ['Jamil', 'Salah', 'Kala'];
const [chotu, ...restFriends] = friends;
console.log(chotu, restFriends);