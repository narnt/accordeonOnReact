import React from 'react'
import { render } from 'react-dom'
// import Root from './components/Root'
// import ArticleList from './ArticleList'
// import { articles } from './fixtures'
import Accordeon from './Accordeon';

// const article = articles[0]

function HelloWorld() {
    return <h1 > Hello world < /h1>
}

render( < Accordeon /
    >
    , document.getElementById('container'))