import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>

          <p className="home-description">
            Million of people are searching fro jobs,salary information,company
            reviews.Find the job that fits your abilities and potential.
          </p>
          <button type="button" className="find-job-btn">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
          alt="dresses to be noticed"
          className="home-image"
        />
      </div>
    </>
  )
}

export default Home
