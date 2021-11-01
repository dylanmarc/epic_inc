import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactSection from '../components/ContactSection'

const Contacts = () => (
  <Layout>
    <Seo title="What we do" />
    <ContactSection />
  </Layout>
)

export default Contacts
