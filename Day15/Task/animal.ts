export interface IAnimal{
    name: string,
    age:number 
}

export interface IDog extends IAnimal{
    breed: string
}

export function DogDetails(dog: IDog) {
    console.log(`Name: ${dog.name}`);
    console.log(`Age: ${dog.age}`);
    console.log(`Breed: ${dog.breed}`);
}