import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBar } from './Pages/Search';
import List from './Pages/List';
import './index.css'
import { Detail } from './Pages/Detail';
import { FavProvider } from './Context/LocalStorageContext';
import { Favorite } from './Pages/Favorite';



function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-spotify-mbee.up.railway.app/query',
    cache: new InMemoryCache(),
  });


  return (
    <ApolloProvider client = {client}>
      <FavProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SearchBar/>}></Route>
            <Route path='/List' element={<List/>}></Route>
            <Route path='/Detail/:id' element={<Detail/>}></Route>
            <Route path='/Favorites' element={<Favorite/>}></Route>
          </Routes>
        </BrowserRouter>
      </FavProvider>
      
    </ApolloProvider>
  );
}

export default App;
