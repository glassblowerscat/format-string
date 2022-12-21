# Format String

A set of simple, dependency-less functions for formatting strings. So far, there are only two:

1. `capitalize` accepts a string and returns the same string but with the first character capitalized and all subsequent characters lowercased
2. `splitCamelAndPascal` accepts a string that might be in either PascalCase or camelCase and returns the same string split into spaces

```js
// capitalize

capitalize("HELLO WORLD") // "Hello world"
capitalize("hello world") // "Hello world"
capitalize("HELLO, WORLD") // "Hello, world"
```

```js
// splitCamelAndPascal
splitCamelAndPascal("HelloWorld") // "Hello World"
splitCamelAndPascal("helloWorld") // "hello World"
```
