import React from 'react'
import Home from './Home'
import ProgramsOverviewSection from './ProgramsOverviewSection'
import CommunityGallerySection from './CommunityGallerySection'
import Courses from './Courses'
import Branches from './Branches'
import Form from './Form'
import Footer from './Footer'

const App = () => {
  return <>
    <Home />
    <Courses />
    <Branches />
    <ProgramsOverviewSection />
    <CommunityGallerySection />
    <Form />
    <Footer />
  </>
}

export default App