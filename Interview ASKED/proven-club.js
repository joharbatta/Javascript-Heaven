https://www.notion.so/theprovenclub/Click-here-if-you-attempted-the-challenge-in-React-SDE2-17dcaa48872e8062a066d6df0593945c

https://codesandbox.io/p/sandbox/frfcn3?file=%2Fsrc%2Fchallenge.txt%3A14%2C23

## ⛔ Things to keep in mind - Please read carefully

- **Chatgpt and google use is not allowed**
- **You can use IDEs (like VSCode/ Xcode) for code snippets. (No AI Plugin/Copilot- Must have standard autocomplete)**
- Please take your time to structure your thoughts and explain your approach. (Do not read the Questions loudly)
- Avoid using pen paper. if you are using, make sure to tilt the camera and show your paper.
- Keep your camera on and share your entire screen throughout the challenge.
- **Call 7974170622/9131034228 for assistance or when done.**
- **Share code snippet answers via .txt to** [Anshika at support@theproven.club](mailto:support@theproven.club) **before leaving Google Meet.**

<aside>
💡 Note:

1. 2 screens are not allowed. If you are using, please remove
2. Kindly look at the screen throughout the challenge. (Any repeated noticeable eye movement away from the screen may be flagged as suspicious activity.)
3. The recording goes through our AI proctor software post the challenge and any such instances get captured and get automatically shared with companies. This could lead to disqualification
</aside>

## **🧠 What's the Mission?**

### ⌛ Estimated time: 90 mins

### 📜 Asks

---

### **Section 1: React.js Basics Q&A (10 mins)**

**Verbal:**

1. What is the purpose of `useState` and `useEffect` in React? Explain how they are commonly used in functional components.

**Code Snippets:**

1. Implement a custom React hook called `useSessionStorage` that stores a value in `sessionStorage` and keeps it in sync with a state value.
2. Create a simple Tab component using React hooks. The component should:
    - Allow switching between different tabs.
    - Dynamically render the content based on the active tab.

---

### **Section 2: JavaScript Q&A (10 mins)**

**Verbal:**

1. What are closures in JavaScript, and why are they useful? Provide a simple example.

**JavaScript Code Snippet:**

1. Implement a function `delayExecution` that takes a callback function and a delay time in milliseconds, and executes the callback after the specified delay using `setTimeout`.

---

### **Section 3: State Management (15 mins)**

Choose to answer the following questions using any state management solution you prefer (e.g., Redux, Context API, Zustand, MobX). Your solution should demonstrate proficiency in the selected approach.

1. Create a combined state management structure to handle user authentication and posts.
    - Ensure your solution includes separate management for authentication status and a list of posts.
2. Given the following state structure, write a selector or equivalent function to get all completed tasks:
    
    ```jsx
    const state = {
      tasks: {
        byId: {
          '1': { id: '1', name: 'Task 1', completed: false },
          '2': { id: '2', name: 'Task 2', completed: true },
          '3': { id: '3', name: 'Task 3', completed: false },
        },
        allIds: ['1', '2', '3'],
      },
    };
    
    ```
    
3. Write an action or function and the necessary state updates for toggling a task’s completion status in the given state structure.

---

### **Section 4: Advanced React Concepts (20 mins)**

**Verbal:**

1. Explain how React’s Virtual DOM works and how it improves performance compared to direct DOM manipulation.
2. Explain the `useCallback` and `useMemo` hooks in React and how they can be used for performance optimization.

**Code Snippets:**

1. Implement a Higher-Order Component (HOC) in React that tracks the number of times a wrapped component is clicked and logs the click count to the console each time.
    
    **Requirements:**
    
    1. The HOC should wrap any component and count how many times the wrapped component is clicked.
    2. It should log the current click count to the console each time the component is clicked.
    3. Ensure the wrapped component’s original functionality is maintained while adding the click tracking behavior.
2. Create a functional component in React that debounces a search input, ensuring that the search function is invoked only after the user has stopped typing for a specified duration.
    
    **Requirements:**
    
    1. Implement a search input field that updates its value as the user types.
    2. Use a debounce mechanism to delay the execution of the search function until the user has paused typing for a defined period.
    3. Ensure that the debounce duration can be easily configured as a prop.

---

### **Section 5: React Code Improvement Problem (10 mins)**

1. Given the following `UserList` component, explain how you would prevent unnecessary re-renders and optimize performance:
    
    ```jsx
    const UserList = ({ users }) => {
      return (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    };
    
    ```
    
2. How would you optimize this component to filter a large list of users efficiently when the user types in the search field?
    
    ```jsx
    const UserSearch = ({ users }) => {
      const [query, setQuery] = useState('');
      const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
    
      return (
        <>
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
          <ul>
            {filteredUsers.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      );
    };
    
    ```
    

---

### **Section 6: TypeScript Questions (15 mins)**

**Verbal:**

1. What are TypeScript interfaces, and how do they help with type safety?
2. What is the difference between `type` and `interface` in TypeScript? When would you choose one over the other?
3. Explain what TypeScript’s `never` type is and provide an example of its usage.

**Code Snippets:
(If you are not comfortable with typescript, you may write the code solutions in Javascript where feasible.)**

1. **Write a TypeScript function to flatten a deeply nested array. The function should handle arrays of arbitrary depth and include elements of different types, ensuring the original array is not mutated.**
    
    ```tsx
    
    //candidate to implement function flattenArray here
    
    // Example input
    const inputArray: (number | number[])[] = [1, [2, 3, [4, 5, [6, [7]]]], 8, [[9, 10], 11], [[[12]]]];
    const flattenedArray = flattenArray(inputArray);
    console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    
    ```
    // function flattenArray(input: (number | number[])[], output: number[] = []): number[] {
    //     for (let i = 0; i < input.length; i++) {
    //         if (Array.isArray(input[i])) {
    //             flattenArray(input[i] as number[], output); // Recursively process nested arrays
    //         } else {
    //             output.push(input[i] as number); // Add numbers to the output array
    //         }
    //     }
    //     return output; // Return the flattened array
    // }
    // const flattenedArray = flattenArray(inputArray);
    
    // console.log(flattenedArray)
2. Write a TypeScript utility function called `filterByType<T>` that takes an array and a type, and returns only the elements of that type from the array.
    - Example input: `filterByType([1, "a", true, 2], "string") // Output: ["a"]`
3. Implement a function `mergeObjects<T>` that takes two objects and merges them while keeping the type safety intact.Below is the skeleton provided

```jsx
// Input objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Engineer", isActive: true };

// Call the mergeObjects function
const mergedObject = mergeObjects(obj1, obj2);

// Output
console.log(mergedObject); 
// Output: { name: "Alice", age: 25, job: "Engineer", isActive: true }

// Type safety ensures that both types are preserved:
mergedObject.name;       // Type is string
mergedObject.age;        // Type is number
mergedObject.job;        // Type is string
mergedObject.isActive;   // Type is boolean

```

---

### **Section 7: TypeScript Code Snippet (10 mins)**

1. Create a TypeScript utility function `removeUndefined<T>` that takes an array of items and removes all `undefined` values while preserving the type of the array elements. The function should return a Promise that resolves to the filtered array.
    
    **Requirements:**
    
    1. Implement the `removeUndefined` function to accept an array of items of type `T`.
    2. The function should filter out all `undefined` values from the array.
    3. Ensure that the return type of the function is a Promise that resolves to an array of type `T` without `undefined` values.
    4. Include error handling to manage any potential issues that may arise during the filtering process.

Example with **input/output:**

```
const input3: (string | number | undefined)[] = [42, "hello", undefined, "world", undefined, 100];

removeUndefined(input3)
  .then(result => {
    console.log(result); // Output: [42, "hello", "world", 100]
  });

```

---