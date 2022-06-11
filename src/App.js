import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import client from "./contentful/client";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Tags from "./components/Tags";
import AllArticles from "./components/AllArticles";
import Articles from "./components/Articles";
import Article from "./components/Article";
import About from "./components/About";
import Authors from "./components/Authors";
import Author from "./components/Author"
import Footer from "./components/Footer";
import FooterSubmitted from "./components/FooterSubmitted";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState();
  const [authors, setAuthors] = useState();
  const [tags, setTags] = useState();

useEffect(() => {
  setIsLoading(true);
  const articles = client
  .getEntries({
    content_type: "product", // content type is actually article 
    // 'metadata.tags.sys.id[in]': 'recommendation'
  })

  // {'metadata.tags.sys.id[in]': 'tagOne,tagTwo'}

  const authors = client
  .getEntries({
    content_type: "author",
  })

  const tags = client
  .getTags()

  Promise
    .all([articles, authors, tags]).then(([articlesData, authorsData, tagsData]) => {
      // console.log(articlesData)
      // console.log(authorsData)
      // console.log(tagsData)
      setArticles(articlesData)
      setAuthors(authorsData)
      setTags(tagsData)
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
          <Route 
            path='/'
            element={
              <>
                <About/>
                <Tags tags={tags}/>
                <Articles articles={articles.items}/>
                <Link to={`/articles`} className='article-link'>See all articles</Link>
                <Outlet/>
              </>
            }
          >
            <Route 
              path='/' 
              element={<Footer/>} />
            <Route 
              path='submitted' 
              element={<FooterSubmitted/>} />
          </Route>
        <Route
          path='/articles'
          element={<AllArticles articles={articles.items} />}
        />
        <Route
          path='/article/:articleID'
          element={<Article articles={articles.items}/>}
        />
        <Route 
          path='/authors'
          element={<Authors authors={authors.items}/>}
        />
        <Route 
          path='/author/:authorID'
          element={<Author authors={authors.items}/>}
        />
      </Routes>
    </div>
    </>
  );
};

export default App;    