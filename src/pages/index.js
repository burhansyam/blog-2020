import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import GitHubButton from 'react-github-btn'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import photo from '../../content/images/me.png'

export default class Index extends Component {
  render() {
    const popularPostEdges = this.props.data.popular.edges
    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Catatan Pribadi Pengganti Pena dan Kertas`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <a
              href="https://www.instagram.com/burhansyam_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={photo}
                className="lite-icon"
                title="Halo om, saya Burhan"
                alt="Halo om, saya Burhan"
              />
            </a>
            <h1>Hai, Saya Burhan</h1>
            <p>
                Suka membaca, menulis dan berbagi,baik pengalaman pribadi maupun seputar dunia IT apalagi hal² baru bagi saya. Semua saya catat di <a
                  href="https://burhansyam.com"
                  target="blank"
                >
                Sini
                </a>. Temukan beberapa artikel menarik lainnya di sini. 
              </p>
            <div className="social-buttons">
              <div>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/burhansyam_"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  Follow @burhansyam_
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="container">

          <section className="section">
            <h2>Artikel Pilihan</h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
