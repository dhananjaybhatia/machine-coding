import Accordion from "./component/Accordion";

const App = () => {
  const items = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It allows developers to build reusable UI components.",
    },
    {
      title: "What is a Component?",
      content:
        "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return JSX.",
    },
    {
      title: "What is State in React?",
      content:
        "State is an object that represents the dynamic parts of a component. It allows components to create and manage their own data.",
    },
    {
      title: "What are Props?",
      content:
        "Props are inputs to components. They are data passed down from a parent component to a child component.",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-center p-10">
      <h1 className="text-7xl font-serif">Accordion</h1>
      {!items?.length ? (
        <p className="text-center text-gray-500">No items to show</p>
      ) : (
        <Accordion items={items} />
      )}
    </div>
  );
};

export default App;
