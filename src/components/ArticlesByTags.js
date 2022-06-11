// ES7+ React/Redux/React-Native snippets
import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import AllArticles from "./AllArticles"

const ArticlesByTags = ({articles, setSelectedTag}) => {
    const { tagId } = useParams(); 

    useEffect(() => {
        setSelectedTag(tagId)
    }, [tagId])

    console.log(articles)

    if (!articles) return null;

  return (
    
    <AllArticles articles={articles.items} />
  )
}

export default ArticlesByTags