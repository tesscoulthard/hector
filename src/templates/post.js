import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Image } from "../components/image"

const Page = styled.div`
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 32px;
  hr {
      margin: 3rem 0;
  }
`

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <Page>
        <Image name="cover" />
      </Page>
      <div className="blog-post">
        <Page dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <Image name="end" />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
