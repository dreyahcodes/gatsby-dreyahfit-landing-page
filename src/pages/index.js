import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import dreyahImg from "../images/dreyah.jpg"
import SubscriptionForm from "../components/SubscriptionForm"
import Layout from "../components/layout"

const LandingPageEl = styled.div`
  height: 100vh;
  background-image: url(${dreyahImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 100%;
  flex-direction: column;
  overflow: hidden;

  &:before {
    content: " ";
    height: 100%;
    width: 100%;
    background-color: #eba599e8;
    z-index: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .text-wrapper {
    text-align: center;
    padding: 4%;
    z-index: 2;

    .main-header {
      margin: 0;
      font-size: 9rem;
      text-transform: uppercase;
      color: white;
    }
    p {
      margin: 0 0 5px 0;
      font-size: 1.9rem;
      /* text-transform: uppercase; */
      color: white;
      margin-bottom: 1rem;
    }
    .subtitle-header {
      margin: 0;
      color: white;
      font-size: 2.9rem;
      font-weight: 400;
      max-width: 600px;
    }
  }

  .subscription-wrapper {
    text-align: center;
    z-index: 2;

    .subscription-text {
      margin: 0;
      font-size: 2.8rem;
      color: white;
      margin-bottom: 11px;
      font-weight: 500;
      font-family: "Libre Baskerville";
      font-style: italic;
    }
    h5 {
      margin: 0 0 5px 0;
      font-size: 2.8rem;
      text-transform: uppercase;
      color: white;
      margin-bottom: 2rem;
      max-width: 600px;
    }
  }

  @media screen and (max-width: 850px) {
    background-position: 75% 100%;
  }

  @media screen and (max-width: 587px) {
    background-position: 60% 100%;
    .text-wrapper {
      .main-header {
        margin-top: 6rem;
        line-height: 1;
        font-size: 6rem;
      }
    }
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <LandingPageEl>
        <SEO
          title="Every Fit Girl"
          keywords={[`fitness`, `women's health`, `lifestyle`]}
        />
        <div className="text-wrapper">
          <h1 className="main-header">EVERY FIT GIRL</h1>
          <p>(formerly Dreyah Fit)</p>
          <h3 className="subtitle-header">
            Empowering women to invest in their wellbeing, while having as much
            fun as possible.
          </h3>
        </div>

        <div className="subscription-wrapper">
          <h4 className="subscription-text">Launching June 2019'</h4>
          {/* <p>Fitness and Lifestyle for women</p> */}
          <h5>Be the first to know & get exclusive content in your inbox</h5>

          <SubscriptionForm />
        </div>
        <div className="overlay" />
      </LandingPageEl>
    </Layout>
  )
}

export default IndexPage
