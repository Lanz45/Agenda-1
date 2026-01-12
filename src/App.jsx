import Computer from "./Laptop.jsx";

function App() {
  return (
      <> 
      <Computer 
            name="Dell" 
            category="A"           
            description="Gaming"   
            quantity={5}           
            price={34999.99}        
            isDeliver={true}       
          />

          <Computer 
            name="HP" 
            category="B" 
            description="Office" 
            quantity={3} 
            price={28850.50} 
            isDeliver={true} 
          />

          <Computer 
            name="Lenovo" 
            category="C" 
            description="Business" 
            quantity={10} 
            price={45500.00} 
            isDeliver={false} 
          />
    </>
    
  )
}

export default App