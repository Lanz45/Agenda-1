import Computer from "./UseProps.jsx";

function App() {
  // 1. Store your data in an array of objects
  const computers = [
    {
      id: 1,
      name: "Dell",
      category: "A",
      description: "Gaming",
      quantity: 5,
      price: 34999.99,
      isDeliver: true,
    },
    {
      id: 2,
      name: "HP",
      category: "B",
      description: "Office",
      quantity: 3,
      price: 28850.50,
      isDeliver: true,
    },
    {
      id: 3,
      name: "Lenovo",
      category: "C",
      description: "Business",
      quantity: 10,
      price: 45500.00,
      isDeliver: false,
    },
  ];

  return (
    // Added a grid container so they look nice side-by-side
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      
      {/* 2. Map through the array to generate components */}
      {computers.map((comp) => (
        <Computer
          key={comp.id} // Important: Unique key for React
          name={comp.name}
          category={comp.category}
          description={comp.description}
          quantity={comp.quantity}
          price={comp.price}
          isDeliver={comp.isDeliver}
        />
      ))}
      
    </div>
  );
}

export default App;