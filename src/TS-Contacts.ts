interface User {
  name: string,
  age: number,
  group: string
};

interface Admin {
  name: string,
  age: number,
  role: string
};

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Админ Админов',
    age: 169,
    role: 'администратор',
  },
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Иван Иванов',
    age: 44,
    group: 'Семья',
  },
  {
    name: 'Пётр Петров',
    age: 14,
    group: 'Друзья',
  },
  {
    name: 'Василий Васильев',
    age: 73,
    group: 'Школа',
  }
];

const logPerson = (person: Person) => {
  let information: string;
  if ('role' in person) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);
