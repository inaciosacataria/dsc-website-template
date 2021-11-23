import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import image from '../../images/header/diversity.png'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const {
    websiteYaml: { calendar, university },
  } = useStaticQuery(graphql`
    {
      websiteYaml {
        calendar
        university
      }
    }
  `)
  return (
    <header id="hero" className="hero">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <div className="hero-content">
              <div className="hero-title__group">
                <div className="hero-title">
                  <h2 className="zuri">
                    Developer Student Club <br /> {university}.
                  </h2>
                </div>
                <div className="Hero--Subtitle">
                  <p className="lead">
                    'Developer Student Clubs(DSC) é programa do <first-letter>G</first-letter>
                    <third-letter>o</third-letter>
                    <second-letter>o</second-letter>
                    <first-letter>g</first-letter>
                    <forth-letter>l</forth-letter>
                    <third-letter>e</third-letter> Developers para estudantes de nivel ténico e universitários  adquirirem habilidades em 
                    <second-letter> desevolvimento web </second-letter> e{' '}
                    <first-letter>mobile</first-letter>,{' '}
                    <third-letter>design thinking </third-letter> e{' '}
                    <forth-letter>liderança.</forth-letter>
                  </p>
                </div>
              </div>
              {calendar === '' ? null : (
                <a className="hero-button" href={calendar}>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  Tornar se Membro
                </a>
              )}
            </div>
          </Col>
          <Col xs={12} sm={5} className="ml-auto ml-pic">
            <div className="hero-figure">
              <img
                src={image}
                className="img-fluid w-100"
                alt="Illustration of diversity in our developer community"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
