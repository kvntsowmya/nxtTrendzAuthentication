import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="small-nav-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          alt="website-logo"
          className="trendz-image"
        />
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
        alt="nav logout"
        className="logout-icon"
      />
    </div>
    <ul className="list-container">
      <li className="list-item">Home</li>
      <li className="list-item">Products</li>
      <li className="list-item">Cart</li>
      <li className="list-item">
        <button type="button" className="login-btn">
          Logout
        </button>
      </li>
    </ul>
    <div className="nav-items">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
        alt="nav home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
        alt="nav products"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
      />
    </div>
  </nav>
)

export default Header
