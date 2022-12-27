import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Container from "../../components/container"
import Highlight from "../../components/highlight"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  useEffect(() => {
    Highlight()
  })
  return (
    <Layout>
      <Container>
        <h1 className="text-2xl">{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div className="mt-2"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "ddd Do MMMM yy")
        slug
        title
      }
    }
  }
`