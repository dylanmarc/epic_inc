import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ProjectsSection from '../components/ProjectsSection'

const Projects = () => (
  <Layout>
    <Seo title="What we do" />
    <ProjectsSection />
  </Layout>
)

export default Projects
