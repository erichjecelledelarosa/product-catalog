1. What is the difference between props and state?

Props are values that a parent component gives to a child component. The child can only read them. State is data that a component keeps for itself, and it can change using a setter function (like setCartCount). When state changes, React updates the screen.

2. Why can a child component not modify the props it receives?

Props belong to the parent. React uses one-way data flow, so data goes from parent to child only. If a child could change its props, the data in the app would be confusing and hard to track. If the child needs a change, it must ask the parent to do it.

3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?

The parent (App) creates the handleAddToCart function and passes it down as a prop. When the button is clicked, the child (ProductCard) calls that function and gives it the product title. The function runs inside the parent, so the parent receives the title and updates its own state (cart count and last added product).

4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?

React uses the key to tell which item in the list is which, so it can update only the items that changed. If the key is missing, React shows a warning. If keys are duplicated, React can get confused and may show the wrong item, mix up items, or update the wrong card.

5. What does the children prop allow you to do that a normal prop does not?

children lets you put content between the opening and closing tags of a component, like <ProductCard><span>New</span></ProductCard>. This content can be any JSX, such as text, badges or other elements. A normal prop is written as an attribute and usually holds a single value.
