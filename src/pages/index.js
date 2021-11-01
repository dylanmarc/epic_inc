import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
      <Seo title="Home" />
      <Hero />
  </Layout>
)

export default IndexPage
