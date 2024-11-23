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
