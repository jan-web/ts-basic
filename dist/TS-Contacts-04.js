"use strict";
const persons4 = [
    {
        type: 'admin',
        name: 'Иван Петров',
        age: 27,
        role: 'Administrator',
    },
    {
        type: 'user',
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'музыкант',
    }
];
const isAdmin = (person) => {
    return person.type === 'admin';
};
const isUser = (person) => {
    return person.type === 'user';
};
const logPerson4 = (person) => {
    let information = '';
    if (isAdmin(person)) {
        information = person.role;
    }
    else if (person && isUser(person)) {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
console.log('Admins:');
persons4.filter(isAdmin).forEach(logPerson4);
console.log();
console.log('Users:');
persons4.filter(isUser).forEach(logPerson4);
