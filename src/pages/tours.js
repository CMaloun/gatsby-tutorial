import React from 'react'
import Tours from '../components/Tours/Tours'
import Layout from '../components/layout'
import {graphql} from 'gatsby'


const tours = ({data}) => {
    return (
        <Layout>
            Tours pages
            <Tours tours={data.tours.edges}/>
        </Layout>
    )
}
export const getTours = graphql`
  query {
    tours: allContentfulTourExample {
      edges {
        node {
          name
          price
          slug
          country
          id: contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
export default tours
