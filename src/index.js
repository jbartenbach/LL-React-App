import React from 'react'
import ReactDOM from 'react-dom'
import Library from './Library'

let bookList = [
  {title: "The Sun Also Rises", author: "Ernest Hemingway"},
  {title: "The Big Lebowski", pages: 304},
  {title: "All the Names", author: "Jose Saramago", pages: 360}
]

ReactDOM.render(
  <Library books={bookList}/>,
  document.getElementById('root')
)
