import Header from '../Header'
import './index.css'

const Home = () => {
  console.log('home component')
  return (
    <div className="home-container">
      <Header />
      <div className="home">
        <div className="home-description">
          <h1>Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="clothes-img1"
          />
          <p className="home-para">
            Fashion is the part of daily air and it does not quite help that it
            changes all the time. Clothes have always been a mark of the era and
            we are in a revolution. Your fashion makes you been seen and heard
            that way you are. So, celebrate the seasons new and exciting fashion
            in your own way
          </p>
          <button type="button" className="shopnow-btn">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothes-img"
        />
      </div>
    </div>
  )
}

export default Home
