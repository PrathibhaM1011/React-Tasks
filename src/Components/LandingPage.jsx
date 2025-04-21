import Header from './Header.jsx'
import Banner from './Banner.jsx'
import About from './About.jsx'
import Service from './Service.jsx'
import Products from './Products.jsx'
import Menu from './Menu.jsx'
import Team from './Team.jsx'
import Footer from './Footer.jsx'

const LandingPage = () => {
    return <div className="container">
    <Header/>

    <Banner/>   

<h1 style={{textAlign:'center'}}>About Us</h1>
    
    <About/>

<h1 style={{textAlign:'center'}}>Our Services</h1>
    
    <Service/>

<h1 style={{textAlign:'center'}}>Our Products</h1>

    <Products/>

<h1 style={{textAlign:'center'}}>Our Menu</h1> 

    <Menu/>

    <h1 style={{textAlign:'center'}}>Our Team</h1> 

    <Team/>  

    <Footer/>


</div>
  }
  
  export default LandingPage;
  
