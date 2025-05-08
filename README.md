# What are some differences between interfaces and types in TypeScript?


![Md. Asraful Alom]()


For type safty TypeScript is a powerful tool. But when it's comes to using ```interface``` or ```type``` mostly everyone fall in a confeution which one we shold use. In todays blog we will discuss about pros and cons of using interface and type which will help us decide the best feat for us.

## 👥 Interface: Designed for Object Shapes
Interface are primarily used to creat an object. It is greate for creating an blueprint for an object and extending with other interfaces.


```sh
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}
```

## ✅ Why  we should use interfaces?

- Support declaration merging.
- Better for object and class modeling.
- API's design easier to understand with interface.

## 🎭 Type Alias: The More Flexible Sibling
Type aliases can describe any valid type in TypeScript—not just object shapes.

``` sh
type User = {
  id: number;
  name: string;
};

type ID = number | string;
type Callback = () => void;
```

## ✅ Why  we should use type aliases?

- They can represent primitives, unions, tuples, and more.
- We can create complex type with type alise


## 🔍 Key Differences between interface and type

Feature | Interface | Type Alise
| ------ | ------ | ------ |
Can extends using ```extends``` | 	✅ Yes |		✅ Yes (vai &)
Can merge declarations | ✅ Yes |	❌ No
Can describe non-object types | ❌ No | ✅ Yes 

## 🚀 Final Thought
You won’t go wrong choosing either in many cases. But understanding them and their differences is too important for a good developer. I hope this blog will help you to understand the key difference between ```interface``` and ```type```






# 2. What is the use of the keyof keyword in TypeScript? Provide an example.
When you are using TypeScript for type safty on your program, sometime you might need to access the key of an object. For example- 
```
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

// Hardcoded getter functions
function getUserName(user: { id: number; name: string; email: string }): string {
  return user.name;
}

```
Here you can see we need the key of the user object key. For this kind of useage we have ```keyof``` for making our program more dynamic and more readable. Here is the same example with ```typeof```-

```
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

type User = typeof user;

function getEmail(u: User): string {
  return u.email;
}
```



## 🚀 Why keyof Matters
- Ensures only valid keys are used.
- Enables generic, reusable functions.
- Prevents runtime errors by catching mistakes.
- Enable advanced patterns.

