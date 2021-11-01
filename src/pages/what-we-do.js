import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import WhatWeDoSection from '../components/WhatWeDoSection'

const WhatWeDo = () => (
  <Layout>
    <Seo title="What we do" />
    <WhatWeDoSection />
  </Layout>
)

export default WhatWeDo
