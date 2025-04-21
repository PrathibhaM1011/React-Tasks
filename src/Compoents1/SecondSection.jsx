const SecondSection = () =>{
    return (<>
    <div className="secondSection">
    <div className="leftSide-SecondSection">
        <button className="teluguBtn">ఈ రెసిపీని తెలుగు లో చూడండి</button>
        <img className="recipeImg" src="https://vismaifood.com/storage/app/uploads/public/aee/096/3bb/thumb__700_0_0_0_auto.jpg" />
        <div className="btnContainer">
            <button className="btn">Print Reciepe</button>
            <button className="btn">Move to receipe</button>
        </div>
        <p style={{fontSize:20}}>Enjoy your delicious and flavorful Coconut Pongal with a spicy side dish for the best experience!</p>
        <img src="https://vismaifood.com/storage/app/uploads/public/ffd/fe0/3f7/thumb__700_0_0_0_auto.jpg" style={{width:'95%', maxWidth:'700px'}}/>
        <h1 style={{borderBottom:'1px solid gray', color:'#6a1b9a'}}>Tips</h1>
        <ol style={{lineHeight:'2rem', fontSize:'1.5rem'}}>
            <li>Use Chitti Mutyalu rice for an enhanced aroma and taste. If unavailable, any regular rice will work.</li>
            <li>Soaking the rice for an hour ensures a soft and creamy texture.</li>
            <li>Use only second extract coconut milk - first extract coconut milk makes the pongal too oily and heavy on the stomach.</li>
            <li>A pinch of turmeric enhances the color, as the coconut milk makes the pongal appear too white.</li>
            <li>Adding jaggery is optional, but it enhances the natural sweetness of coconut milk.</li>
            <li>Nutmeg powder adds an extra layer of flavor to the pongal.</li>
        </ol>

    </div>
    
    <div className="rightSide-FirstSection">
    <div class="socialMailingBox">
            <h3>FOLLOW US</h3>
            <div class="iconsRow">
                <i class="fab fa-youtube"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-pinterest"></i>
            </div>
            <h4>JOIN OUR MAILING LIST:</h4>
            <div class="emailBox">
                <input type="email" placeholder="Enter email address here" />
                <button>&rarr;</button>
            </div>
            <p class="privacyNote">We <strong>DON’T</strong> share your data with anyone. <a href="#">Privacy Policy</a></p>
        </div>
  <div className="trendingBox">
    <h3 className="trendingHeading">TRENDING RECIPES</h3>

    <div className="trendingItem">
      <img src="https://vismaifood.com/storage/app/uploads/public/85a/1eb/81d/thumb__700_0_0_0_auto.jpg" alt="recipe1" />
      <div className="trendingText">
        <a href=""><p className="recipeTitle">Andhra Style Peethala Iguru Recipe | Spicy Crab Curry | Crab Recipe</p></a>
        <a href=""><span className="categoryTag">NON VEG CURRIES</span></a>
      </div>
    </div>
    <div className="trendingItem">
      <img src="https://vismaifood.com/storage/app/uploads/public/68a/1e7/6c9/thumb__700_0_0_0_auto.jpg" alt="recipe2" />
      <div className="trendingText">
        <a href=""><p className="recipeTitle">A Highly Nutritious Palak Coconut Rice Recipe | Palak Coconut Rice Recipe</p></a>
       <a href=""> <span className="categoryTag">FLAVORED RICE</span></a>
      </div>
    </div>
    <div className="trendingItem">
      <img src="https://vismaifood.com/storage/app/uploads/public/ba6/d36/647/thumb__700_0_0_0_auto.jpg" alt="recipe2" />
      <div className="trendingText">
        <a href=""><p className="recipeTitle">Wedding Style Soya Keema Masala | Pure Veg Keema Balls Masala | Keema Balls</p></a>
        <span className="categoryTag">MEALMAKER RECIEPES</span>
      </div>
    </div>
    <div className="trendingItem">
      <img src="https://vismaifood.com/storage/app/uploads/public/5e4/e94/1d1/thumb__700_0_0_0_auto.jpg" alt="recipe2" />
      <div className="trendingText">
        <a><p className="recipeTitle">Perfect Ragi Neer Dosa Recipe | Ragi Neer Dosa | Special Ragi Dosa</p></a>
        <span className="categoryTag">BREAKFAST RECIEPES</span>
      </div>
    </div>
    <div className="trendingItem">
      <img src="https://vismaifood.com/storage/app/uploads/public/a79/98f/c96/thumb__700_0_0_0_auto.jpg" alt="recipe2" />
      <div className="trendingText">
        <p className="recipeTitle">Miriyala Pappu Charu Recipe | Black Pepper Dal Rasam | Pepper Dal Rasam</p>
        <span className="categoryTag">EASY CURRIES</span>
      </div>
    </div>
    
   
  </div>
  <div style={{ border: "1px solid gray", padding:'30px', maxWidth:'350px', backgroundColor:'#4b0082', color:'white', maxHeight:'250px', height:'80%'}}>
  <h>SEARCH FOR MORE RECIEPES</h>
  <div className="searchDiv">    
    <input type="text" placeholder="Search by Ingredients"></input>
    <button>&rarr;</button>
  </div>
  </div>
</div>

   
</div>
    
    
    
    </>)
}

export default SecondSection;