import './index.css'

const JobDetailsCard = props => {
  const {jobDetails} = props
  const {
    employeeType,
    location,
    packagePerAnnum,
    rating,
    title,
    companyLogoUrl,
    jobDescription,
  } = jobDetails
  return (
    <div className="background">
      <div className="main-container">
        <div className="app-container1">
          <img className="logo1" src={companyLogoUrl} alt="image1" />

          <div className="rating-head">
            <h1>{title}</h1>
            <div className="star">
              <i className="fas fa-star">{rating}</i>
            </div>
          </div>
        </div>
        <div className="package">
          <div className="loc-work">
            <i className="fas fa-map-marker-alt location">{location}</i>
            <i className="fas fa-briefcase work">{employeeType}</i>
          </div>
          <h1 className="per-annum">{packagePerAnnum}</h1>
        </div>
        <hr />
        <div>
          <h1>Description</h1>
          <p>{jobDescription}</p>
        </div>
      </div>
    </div>
  )
}
export default JobDetailsCard
