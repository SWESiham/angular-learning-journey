export interface IPerson {
  name: string;
  age: number;
}

export function greet(person: IPerson): void {
  console.log(`Hello, ${person.name}!\nAge:  ${person.age} `);
}
