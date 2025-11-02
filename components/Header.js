// components/Header.js
export default function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="topbar-inner">
          <span className="top-item">◻️ Lorem ipsum dolor</span>
          <span className="top-item">◻️ Lorem ipsum dolor</span>
          <span className="top-item">◻️ Lorem ipsum dolor</span>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="nav-left">
          <img src="/assets/logo-mark.svg" alt="brand mark" className="logo-mark" />
        </div>

        <div className="nav-center">
          <img src="/assets/logo-text.svg" alt="logo" className="logo-text" />
        </div>

        <div className="nav-right">
          <img src="/assets/icon-search.svg" alt="search" className="icon" />
          <img src="/assets/icon-heart.svg" alt="wishlist" className="icon" />
          <img src="/assets/icon-cart.svg" alt="cart" className="icon" />
          <img src="/assets/icon-user.svg" alt="account" className="icon" />
          <div className="lang">ENG ▾</div>
        </div>
      </div>

      <nav className="main-nav" aria-label="Primary navigation">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
}
