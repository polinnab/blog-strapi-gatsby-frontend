import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlocksRenderer from "../components/blocks-renderer"
import Headings from "../components/headings"

const AboutPage = () => {
  const { strapiAbout } = useStaticQuery(graphql`
    query {
      strapiAbout {
        title
        description
        blocks {
          ...Blocks
        }
      }
    }
  `)
  const { title, blocks } = strapiAbout

  const seo = {
    metaTitle: title,
    metaDescription: title,
  }

  // const description = 'H'

  return (
    <Layout>
      <Seo seo={seo} />
      <Headings title={strapiAbout.title} description={strapiAbout.description}/>
      <BlocksRenderer blocks={blocks} />
    </Layout>
  )
}

export default AboutPage