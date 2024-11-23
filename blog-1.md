## What are Union Types?

A **Union Type** allows a value to be one of several different types. It’s like saying, “this can be either type A or type B.” We use a union type when a variable or function can accept multiple types of values.

In TypeScript, We can create a union type using the pipe (`|`) symbol.

```typescript
let value: string | number;
value = "Hello";  // valid
value = 42;       // valid
value = true;     // Error: Type 'boolean' is not assignable to type 'string | number'

```
In this example, the variable value can be either a string or a number, but not both at the same time (and not any other type).

## Why Use Union Types?

Union types are useful when we don’t know exactly which type a variable will hold. This is common when working with APIs, form inputs, or user-generated data where the type can vary. They allow us to handle different cases more gracefully.

## What are Intersection Types?

An Intersection Type is the opposite of a union. It allows us to combine multiple types into one. With intersection types, a value must satisfy all the conditions of the combined types. It’s like saying, “this must be type A and type B at the same time.”

In TypeScript, we create an intersection type using the  (&) symbol.

```typescript
type Person = {
    name: string;
    age: number;
};

type Worker = {
    jobTitle: string;
    company: string;
};

type Employee = Person & Worker;

const employee: Employee = {
    name: "John",
    age: 30,
    jobTitle: "Developer",
    company: "Tech Co"
};

```

Here, the Employee type is an intersection of both Person and Worker. So, the variable employee must have all the properties of Person (name, age) and all the properties of Worker (jobTitle, company).

## Why Use Intersection Types?

Intersection types are helpful when we want to combine multiple smaller types into one larger type. This is common when we are working with objects that have different features and we want to create a type that has all of them.