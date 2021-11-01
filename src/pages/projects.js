import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectsSection from '../components/ProjectsSection'

const Projects = () => (
  <Layout>
    <Seo title="What we do" />
    <ProjectsSection />
  </Layout>
)

export default Projects
