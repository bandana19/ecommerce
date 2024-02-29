
import { useState } from 'react';
import './App.css';
import Router from './router/Router';
import MyContext from './state/MyContext';

function App() {
  const [cart,setCart]=useState([])


  function addCart(obj) {
    setCart([...cart,obj])
    let tempArr=[...cart]
    if(tempArr.some((item)=>item.id==obj.id)){
    let result=tempArr.filter((itm)=>itm.id!==obj.id)
    setCart(result)
    }else{
      setCart([...tempArr,obj])
    }
  }

  return (
    <MyContext.Provider value={{addCart:addCart,cart:cart}}>
      <Router/>
      </MyContext.Provider>
  );
}

export default App;
