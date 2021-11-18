import Header from '../Header'
import AllJobs from '../AllJobs'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <AllJobs />
    <div className="notfound-container">
      <img
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png "
      />
      <h1 className="error-heading">Page Not Found</h1>
      <p className="error-description">
        we’re sorry, the page you requested could not be found
      </p>
    </div>
  </>
)
export default NotFound
