import { useEffect, useState } from 'react'
import Mainpage from './shoppingfolder/pages/mainpage'
import './App.css'
import Pastebox from './shoppingfolder/pages/components/pastebox'
import Collections from './shoppingfolder/pages/components/collections'
import Footer from './shoppingfolder/pages/components/footer'
import Header from './shoppingfolder/pages/components/header'
function App() {

  // load from local storage when the app starts
  const [categories , setCategories]= useState({});
  useEffect(()=>{
    const saved = localStorage.getItem('linknestData');
    if(saved){
      setCategories(JSON.parse(saved));
    }
  },[]);

  // save to local storage when the categories change

  useEffect(()=>{
    localStorage.setItem('linknestData', JSON.stringify(categories));

  },[categories]);


  // add new link to a category 

  const handleAddLink = (link,category)=>{
    setCategories(prev=> {
      const updated ={ ...prev };
      if(!updated[category]){
        updated[category]=[];
      }
      updated[category].push(link);
      return updated;
    });

  };


  return (
    <div>
      <Header />
      <Pastebox onAddLink={handleAddLink} />
      <Collections categories={categories} />
      

    </div>
  );
}

export default App;

