import {Component} from 'react'
import Cookies from 'js-cookie'

class ProfileCard extends Component {
  state = {profileDetails: {}}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const profileUrl = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(profileUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.profile_details.map(eachitem => ({
        name: eachitem.name,
        profileImageUrl: eachitem.profile_image_url,
        shortBio: eachitem.short_bio,
      }))
      this.setState({profileDetails: updatedData})
    }
  }

  renderProfileDetails = () => {
    const {profileDetails} = this.state
    console.log(profileDetails)
    return (
      <div>
        <h1>vamsi</h1>
      </div>
    )
  }

  render() {
    return <div>{this.renderProfileDetails()}</div>
  }
}
export default ProfileCard
