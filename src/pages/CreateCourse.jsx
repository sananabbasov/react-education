import React from 'react'
import Banner from '../components/Banner/Banner'
import AddCourse from '../components/Courses/AddCourse'
import Header from '../components/Header/Header'

function CreateCourse() {
  return (
    <div>
        <Header />  
        <Banner bannerHeight="200px" title="Add course"/>
        <AddCourse />
    </div>
  )
}

export default CreateCourse