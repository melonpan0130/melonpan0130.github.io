import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>최근 작성한 게시글 목록</h1>
    <p>이곳에 목록을 표시할 예정입니다.</p>
  </Layout>
);

export default IndexPage
