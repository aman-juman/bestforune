import React from 'react';
import Header from "./components/Header/Header";
import Products from "./components/Poducts/Products";
import venera from './assets/img/venera.jpg';


const store = [
    {id: '001', title: 'Венера', description: 'Для здоровья и молодости', price: 20000, like: false, inStock: true, url: venera},
    {id: '002', title: 'Флора', description: 'Для здоровья и молодости', price: 22000, like: false, inStock: true, url: venera},
    {id: '003', title: 'Капсула', description: 'Для здоровья и молодости', price: 27000, like: false, inStock: true, url: venera},
    {id: '004', title: 'Кальций', description: 'Для здоровья и молодости', price: 23000, like: false, inStock: true, url: venera},
    {id: '005', title: 'Цитрус', description: 'Для здоровья и молодости', price: 25000, like: false, inStock: true, url: venera},
    {id: '005', title: 'Цитрус', description: 'Для здоровья и молодости', price: 25000, like: false, inStock: true, url: venera},
];

export const ProductContext = React.createContext();
const App = () =>{


    return (
        <div className='container'>
           <Header />
           <ProductContext.Provider value={store}>
               <Products />
           </ProductContext.Provider>
        </div>
    )
};

export default App;