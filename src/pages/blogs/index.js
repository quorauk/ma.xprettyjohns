import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Container from "../../components/container"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return <Layout>
    <Container className='text-center p-8'>
      <h1 className="text-4xl font-titles font-black">Blogs</h1>
      <p className="text-2xl mt-2">
        {"Here are some things I've written about"}
      </p>
    </Container>
    {data.allMarkdownRemark.nodes.map((node) => (
      <Container className="mt-5 px-8" key={node.id}>
        <Link className="text-2xl" to={`/blogs/${node.frontmatter.slug}`}>
          <h2>
            {node.frontmatter.title}
          </h2>
        </Link>
        <p className="text-xl">
          {node.frontmatter.date}
        </p>
        <div>
          {node.excerpt}
        </div>
      </Container>
    ))}
  </Layout>
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id,
        excerpt
        timeToRead
        frontmatter{
          slug
          title
          date(formatString: "ddd Do MMMM yy")
        }
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage