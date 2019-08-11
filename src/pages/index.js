import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Poon's Thought</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}){
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`