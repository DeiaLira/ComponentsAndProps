import './App.css'
import ProductCard from './components/ProductCard/ProductCard'

function App() {
  const produto = {
    name: 'Celular Samsung Galaxy A05s 128GB, 6GB RAM',
    price: '999.00',
    imageUrl: 'https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-a05s-128gb-6gb-ram-tela-infinita-de-6-7/samsung/5976/d373d4904ff731f8d1386b3155d41b6e.jpeg'
  };

  return (
    <>
      <div>
        <h2>Ecommerce do sol</h2>
        <ProductCard 
          name={produto.name}
          price={produto.price}
          image={produto.imageUrl}
        />
      </div>
    </>
  )
}

export default App
