

## [github-link](https://github.com/SAMIA-TASMIN/B12A7-Customer-Support-Zone)
## [github-live-link]( https://samia-tasmin.github.io/B12A7-Customer-Support-Zone/)
## [live-link](https://a7-b12a7-customer-support-zone.netlify.app/)


<!-- Live-Link:a7-b12a7-customer-support-zone.netlify.app -->

## 1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows you to write HTML-like code directly inside JavaScript. JSX makes it easier to create UI components by making the structure more readable and intuitive.

**Why it's used:**

* It improves readability and makes UI structure clear.
* It helps React detect errors early through its syntax rules.
* JSX gets compiled into React `createElement` calls, improving performance and organization.

---

## 2. What is the difference between State and Props?

### **State:**

* Managed within the component (internal data).
* Can be updated by the component itself using hooks like `useState`.
* Used to store data that changes over time.

### **Props:**

* Passed from parent to child component.
* Read-only (cannot be modified by the receiving component).
* Used to pass data or functions.

**Short difference:** State is internal and mutable; props are external and immutable.

---

## 3. What is the useState hook, and how does it work?

`useState` is a React hook that allows functional components to manage state.

### **How it works:**

* `useState` returns an array with two values:

  1. The current state value.
  2. A function to update the state.

Example:

```javascript
const [count, setCount] = useState(0);
```

Here:

* `count` → current value.
* `setCount` → function used to change the value.

Whenever state updates, the component re-renders.

---

## 4. How can you share state between components in React?

You can share state using:

### **1. Lifting State Up**

Move shared state to the closest common parent and pass it down via props.

### **2. Context API**

Useful for global data like themes, authentication, settings.



---

## 5. How is event handling done in React?

React uses camelCase syntax for event names and passes functions instead of strings.

Example:

```javascript
<button onClick={handleClick}>Click Me</button>
```

Key points:

* Events are wrapped in synthetic events for cross-browser compatibility.
* Event handlers are usually defined as functions.
* You can pass arguments by using arrow functions.

Example:

```javascript
<button onClick={() => handleClick(5)}>Click</button>
```

---
