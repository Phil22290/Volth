import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../../src/components/layout.css'
import GalleryG from "../components/gallery"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <GalleryG />
  </Layout>
)

export default GalleryPage