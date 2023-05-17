import * as React from "react"
import Header from "../components/Header"
import Intro from "../components/Intro";
import Services from "../components/Services";
import Venue from "../components/Venue";
import Review from "../components/Review";
import Blogs from "../components/Blogs";
import SignUp from "../components/Signup";
import Started from "../components/Started";
import Footer from "../components/Footer";
import { useState } from "react";
// import { graphql } from "gatsby";

export default function Home() {

  const [ref, setRef] = useState(null)
  
  const valueRef = (data) => {
    // console.log(data, 'data');
    setRef(data)
  }

  return (
    <React.Fragment>
      <Header />
      <Intro onRef={ref}/>
      <Services />
      <Venue />
      <Review />
      <Blogs />
      <SignUp />
      <Started passRef={valueRef}/>
      <Footer />
    </React.Fragment>
  )
}



