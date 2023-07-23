

const HeroSection = ()=>{
    return <main className="hero">
        <div className="hero-content">
          <h1>Your feet deserve the best</h1>
          <p>
          We are a manufacturer specializing in the 
          production of slipper, such as rubber
          <p> slipper, sandals, hotel cotton slipper, 
           flip flops
          , sheepskin slipper, slides, etc.</p>
          </p>
          <div className="hero-btn">
            <button>Shop now</button>
            <button className="secondary-btn">Category</button>

          </div>

          <div className="shopping">
            <p>Also available on </p>
          </div>

          <div className="brand-icon">
          <p>
          <a href="https://www.amazon.com/" alt="https://www.amazon.com/">
            <img src="/images/Amazon.webp" alt ="amazon" style ={{height:50}}/>
            </a>
            <a href="https://www.flipkart.com/" alt ="https://www.flipkart.com/">
            <img src="/images/flipcard.jpeg" alt ="amazon" style ={{height:50}}/>
</a>
</p>


          </div>

          
        </div>
        <div className="hero-image">
            <img src="/images/shose.jpeg" alt="slipper" style={{height:500}}></img>
        </div>
    </main>
}
export default HeroSection;
