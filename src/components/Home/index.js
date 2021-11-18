import {Link} from 'react-router-dom'
import Header from '../Header'
import ProfileCard from '../ProfileCard'

import './index.css'

const Home = () => (
  <>
    <Header />
    <ProfileCard />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>

        <p className="home-description">
          Millions of people are searching for jobs,salary information,company
          reviews.Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button type="button" className="find-job-btn">
            Find Jobs
          </button>
        </Link>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
        alt=""
        className="home-image"
      />
    </div>
  </>
)

export default Home
