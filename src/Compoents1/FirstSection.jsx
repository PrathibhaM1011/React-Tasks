const FirstSection = () =>{
    return (<>

   <div className="firstSection">
   <div className="leftSideDiv-firstSection">
        <h1>Coconut Ven Pongal Recipe | Kattu Pongali Recipe | Coconut Milk Pongal Recipe</h1>
        <button><a>Breakfast Reciepes</a></button>
        <p><strong>Coconut Ven Pongal</strong> Recipe I first tasted this Coconut Pongal at a wedding in Chennai. It was incredibly soft and melted in the mouth like butter. However, it was quite bland, served alongside a spicy black pepper kolambu. Inspired by that, I decided to make it slightly spicier and paired it with Miriyala Pappucharu (Pepper Dal)—a combination that turned out to be a super hit! My method remains simple, just as I had in Chennai, but with an extra punch of flavor.</p>
        
   </div>
    <div className="rightSideDiv-firstSection">
           
        <div className="dropdownWrapper">
        <label htmlFor="breakfastType">More in Breakfast Recipes</label>
  <select id="breakfastType" className="customDropdown">
    <option>Choose One</option>
    <option>Indian Breakfast</option>
    <option>South Indian Breakfast</option>
  </select> 
</div>
<div>  
  <img  className="firstSection-AddImage"   src="https://www.adgully.com/img/800/63565_mtr-foods-spices-masaas-tvc-grab.jpg"  />
</div>
    </div>
    </div> 
   
    
    </>)
}

export default FirstSection;