1. What is JSX, and why is it used?

   - JSX stands for JavaScript XML. It lets you write HTML-like syntax inside JavaScript, making React code more readable and easier to create UI components.

2. What is the difference between State and Props?
   -State: Managed inside a component (dynamic, can change).
   -Props: Passed from parent to child (read-only, immutable).

3. What is the useState hook, and how does it work?
   useState is a React Hook that adds state to functional components. It returns an array with [value, setValue], where value is the current state and setValue updates it.

4. How can you share state between components in React?
   By lifting state up to a common parent and passing it as props, or using Context API / state management libraries like Redux/Zustand.

5. How is event handling done in React?
   Events are handled using camelCase attributes (e.g., onClick, onChange) with functions as values. Example:
   <button onClick={handleClick}>Click Me</button>
