import {Component} from 'react'
import Cookies from 'js-cookie'
import JobDetailsCard from '../JobDetailsCard/index'
import './index.css'

class AllJobs extends Component {
  state = {
    jobsList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getJobDetails()
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getJobDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const api = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(api, options)

    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.jobs.map(eachjob => ({
        companyLogoUrl: eachjob.company_logo_url,
        employeeType: eachjob.employment_type,
        jobDescription: eachjob.job_description,
        location: eachjob.location,
        packagePerAnnum: eachjob.package_per_annum,
        rating: eachjob.rating,
        title: eachjob.title,
      }))

      this.setState({jobsList: updatedData})
    }
  }

  renderJobs = () => {
    const {jobsList, searchInput} = this.state
    const searchResult = jobsList.filter(eachuser =>
      eachuser.title.includes(searchInput),
    )

    return (
      <div className="search-container">
        <input
          placeholder="Search"
          className="inputElement"
          type="text"
          onChange={this.onChangeInput}
        />
        <ul className="un-order-list">
          {searchResult.map(eachjob => (
            <JobDetailsCard jobDetails={eachjob} key={eachjob.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <div>{this.renderJobs()}</div>
  }
}
export default AllJobs
