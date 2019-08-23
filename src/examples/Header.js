import React from 'react'
import {useStaticQuery, graphql}    from 'gatsby'
const getData = graphql`{
    site {
      siteMetadata {
        title
        description
        siteUrl
        websiteauthor:author
      }
    }
  }`
const Header = () => {
    const {site : {siteMetadata:info}} = useStaticQuery(getData)

    return (
        <div>
            <h1> author : {info.websiteauthor}</h1>
            <h1>title : {info.title}</h1>
        </div>
    )
}

export default Header
