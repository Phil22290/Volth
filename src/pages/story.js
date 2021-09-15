import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../../src/components/layout.css"
import Story from "../components/story"

const StoryPage = () => (
  <Layout>
    <SEO title="Story" />
    <Story />
  </Layout>
)

export default StoryPage