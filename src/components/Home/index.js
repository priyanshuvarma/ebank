import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-description">Your Flexibility, Our Excellence</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
