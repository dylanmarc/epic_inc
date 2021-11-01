import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutSection from '../components/AboutSection'

const About = () => (
  <Layout>
    <Seo title="About" />
    <AboutSection />
  </Layout>
)

export default About
