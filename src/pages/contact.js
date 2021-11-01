import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ContactSection from '../components/ContactSection'

const Contacts = () => (
  <Layout>
    <Seo title="What we do" />
    <ContactSection />
  </Layout>
)

export default Contacts
