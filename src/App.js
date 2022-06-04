import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import client from "./contentful/client";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Tags from "./components/Tags";
import Articles from "./components/Articles";
import Article from "./components/Article";
import About from "./components/About";
import Authors from "./components/Authors";
import Footer from "./components/Footer";
import FooterSubmitted from "./components/FooterSubmitted";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState()
  const [authors, setAuthors] = useState()

useEffect(() => {
  setIsLoading(true);
  const articles = client
  .getEntries({
    content_type: "product", // content type is actually article 
  })

  const authors = client
  .getEntries({
    content_type: "author",
  })

  Promise
    .all([articles, authors]).then(([articlesData, authorsData]) => {
    //  console.log(articlesData)
      // console.log(authorsData)
      setArticles(articlesData)
      setAuthors(authorsData)
      setIsLoading(false);
  })
    .catch((e) => {
        console.log(e)
        setIsLoading(false);
        setIsError(true);
      });
}, [])

if (isError) {
  return <h1>Something's wrong!</h1>
}

if (isLoading) {
  return <p>Loading...</p>
}

  return (
    <>
    <div className="app-body">
      <Header/>
      <Hero/>
      <Routes>
        <Route path='/'element={
          <>
            <About/>
            <Tags tags={articles.items}/>
            <Articles articles={articles.items}/>
            <Outlet/>
          </>
        }>
        <Route path='/' element={<Footer/>} />
        <Route path='submitted' element={<FooterSubmitted/>} />
        </Route>
        {/* <Route 
          path='/articles' 
          element={<Articles articles={articles.items}/>} 
        /> */}
        <Route 
          path='/authors'
          element={<Authors authors={authors.items}/>}
        />
        <Route
          path='/article/:articleID'
          element={<Article articles={articles.items}/>}
        />
      </Routes>
    </div>
    </>
  );
};

export default App;    