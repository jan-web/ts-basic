type User = {
  name: string;
  age: number;
  group: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
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

const logPerson = (user: Person) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);