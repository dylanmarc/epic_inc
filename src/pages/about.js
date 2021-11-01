import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AboutSection from '../components/AboutSection'

const About = () => (
  <Layout>
    <Seo title="About" />
    <AboutSection />
  </Layout>
)

export default About
