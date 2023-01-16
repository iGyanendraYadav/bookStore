import React from 'react'
import { useParams } from 'react-router-dom';


const Blogpost = () => {
const {blogpost} = useParams();
  return (
    <>
      This is { blogpost} wala Page .
    </>
  )
}

export default Blogpost
