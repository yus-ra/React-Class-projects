import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Templates = (props) => {
  return (
    <div>
      <Header page={"appliedJob"} />
      {/*children*/}
      {props.children}
      <Footer />
    </div>
  )
}

export default Templates