import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hey! My name is Miguel and I'm a Full-Stack Web Developer!</p>
      <StaticImage
        alt="Awesome looking laptop with code on it"
        src="../images/oskar-yildiz-unsplash.jpg"
      />
    </Layout>
  )
}

export default IndexPage