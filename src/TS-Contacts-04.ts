interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person4 = User | Admin;

const persons4: Person4[] = [
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

const isAdmin = (person: Person4): person is Admin => {
  return person.type === 'admin';
}

const isUser = (person: Person4): person is User => {
  return person.type === 'user';
}

const logPerson4 = (person: Person4) => {
  let information: string = '';
  if (isAdmin(person)) {
    information = person.role;
  } else if (person && isUser(person)) {
    information = person.group;
  }
  console.log(` - ${person.name}, ${person.age}, ${information}`);
}

console.log('Admins:');
persons4.filter(isAdmin).forEach(logPerson4);

console.log();

console.log('Users:');
persons4.filter(isUser).forEach(logPerson4);