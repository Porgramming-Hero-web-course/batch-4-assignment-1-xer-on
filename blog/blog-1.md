# Understanding Array Sum in TypeScript

## Problem 1: Array Sum Implementation

In this problem, we implement a TypeScript function that calculates the sum of all elements in a number array.

### The Problem

Create a function `sumArray` that takes an array of numbers and returns their sum.

### Solution Explanation

```typescript
export function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
```

### Key Concepts

1. **Type Declaration**: The function accepts `number[]` (array of numbers) and returns a `number`
2. **Array.reduce()**: Uses the reduce method to iterate through array elements
3. **Arrow Function**: Implements a concise callback for the reduction operation
4. **Initial Value**: Sets 0 as the initial accumulator value

### Usage Example

```typescript
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15
```

### Best Practices

- Type safety ensures only number arrays are accepted
- Using reduce is more efficient than a traditional loop
- The solution handles empty arrays gracefully

```

```
