import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from '../components/layout'
import {Button} from '../components/button'

export default () => (
  <Layout>
    

      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <h1>What a world.</h1>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
       <Button>styled button</Button>

  </Layout>
)
