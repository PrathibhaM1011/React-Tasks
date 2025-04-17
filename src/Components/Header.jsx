const Header = ()=>{
    return <header className="header">
    <div className="logoBox">
       <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0yNCMrUYc4zw8fta7QpfZVXuwEbxEq8ic_Q&s" />
       <h1>CoffeeCrush</h1>
    </div>        

  <nav>
    <ul className="links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Pages</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#profile"><i className="fas fa-user"></i></a></li>
    </ul>
  </nav>
</header>
}
export default Header;