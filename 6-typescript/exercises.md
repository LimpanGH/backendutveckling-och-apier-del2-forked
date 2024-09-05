# Typescript exercises

## 1. **Static Typing**

### In-depth Example

In JavaScript, variables can hold any type of data, and the type can change at runtime. However, this can lead to runtime errors if types are mixed unexpectedly.

In TypeScript, you explicitly declare the type, which helps to avoid these issues. If you try to assign a value of a different type, TypeScript will give you a compile-time error.

Example:

```typescript
let price: number = 100; // 'price' can only hold numbers
price = "Expensive"; // Error: Type 'string' is not assignable to type 'number'
```

**Exercise:**

- Create variables with the following types: `string`, `number`, `boolean`, `array`, `object`. Try assigning a value of a different type to each variable and observe TypeScript's error messages.

## 2. **Enhanced IDE Support**

With TypeScript’s static typing, IDEs can give better autocompletion and suggestions. TypeScript understands the structure of objects and functions due to their types, so the IDE can suggest properties and methods.

### In-depth Example

If you declare a variable with an object type:

```typescript
let person: { name: string; age: number };
person = { name: "Alice", age: 30 };
```

Your IDE will suggest the properties `name` and `age` whenever you try to access or modify the `person` object.

**Exercise:**

- Install Visual Studio Code (or another TypeScript-supporting IDE), create an object with several properties, and observe the autocompletion suggestions when accessing or modifying the object.

## 3. **Error Prevention**

### In-depth Example

Without static typing, functions can be called with incorrect arguments, leading to runtime errors in JavaScript.

In TypeScript, you can declare the types of function parameters and return values to ensure they are always used correctly.

Example:

```typescript
function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}

console.log(calculateArea(5));   // Works fine
console.log(calculateArea("5")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

**Exercise:**

- Write a function that takes two parameters: a `string` and a `number`. Make sure to define their types and ensure TypeScript throws an error if you pass the wrong types.

## 4. **Optional Typing**

TypeScript allows you to use type inference, where the type is automatically determined by the value assigned to the variable. This means you don't always have to explicitly declare the type.

### In-depth Example

```typescript
let greeting = "Hello, World!"; // TypeScript infers the type as 'string'
greeting = 42; // Error: Type 'number' is not assignable to type 'string'
```

You can also make types optional in function parameters or object properties using the `?` symbol.

Example:

```typescript
function greet(name: string, salutation?: string) {
    return salutation ? `${salutation}, ${name}` : `Hello, ${name}`;
}

console.log(greet("John")); // Outputs: Hello, John
console.log(greet("John", "Dr.")); // Outputs: Dr., John
```

**Exercise:**

- Create a function that takes two parameters: one required and one optional. Use type inference for one of the parameters and observe how TypeScript behaves when you provide or omit arguments.

## 5. **ECMAScript Compatibility**

TypeScript fully supports modern JavaScript features such as **destructuring**, **default parameters**, and **arrow functions**. It compiles them down to older JavaScript versions if necessary.

### In-depth Example

```typescript
const person = { name: "Alice", age: 25 };

// Destructuring with type annotations
const { name, age }: { name: string; age: number } = person;

const greet = (person: { name: string; age: number }): string => {
    return `Hello, ${person.name}, you are ${person.age} years old.`;
};
console.log(greet(person));
```

**Exercise:**

- Use destructuring in a TypeScript function that extracts properties from an object and uses them. Type-check the object and the extracted properties.

## 6. **Type Inference**

TypeScript can infer types based on the assigned values, but it also allows you to manually specify them when needed for clarity or stricter control.

### In-depth Example

```typescript
let count = 10; // TypeScript infers 'count' as a number
count = "ten"; // Error: Type 'string' is not assignable to type 'number'
```

**Exercise:**

- Create several variables without explicitly specifying their types and observe how TypeScript infers their types. Then, try to assign incompatible types and observe the errors.

## 7. **Interfaces and Classes**

Interfaces are used to define the shape of an object or class. They allow you to define what properties and methods a class should have.

### In-depth Example

```typescript
interface Vehicle {
    make: string;
    model: string;
    start(): void;
}

class Car implements Vehicle {
    constructor(public make: string, public model: string) {}

    start() {
        console.log(`${this.make} ${this.model} is starting...`);
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar.start();
```

**Exercise:**

- Create an interface for a `Person` with properties like `name`, `age`, and a method `greet`. Then, implement this interface in a class and create an instance of the class to test the method.

## 8. **Generics**

Generics allow you to create reusable code components that work with any data type, but in a type-safe way.

### In-depth Example

```typescript
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numberArray = getArray<number>([1, 2, 3]);
let stringArray = getArray<string>(["apple", "banana"]);
```

Here, the function `getArray` works for both `number` arrays and `string` arrays without needing separate implementations.

**Exercise:**

- Write a generic function that takes an array of any type and returns the first element. Test the function with different types of arrays (numbers, strings, objects).
