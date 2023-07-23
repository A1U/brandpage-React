 

 const Navigation = ()=>{

    return(
        <div>
         <nav>
             <div className="logo">
                 <img src="/images/logo.png" alt ="logo"  style={{height: 50}}/>
             </div>
             <ul className="list">
                 <li href="#" >MENU</li>
                 <li href="#" >LOCATION</li>
                 <li href="#" >ABOUT</li>
                 <li href="#" >CONTACT</li>
             </ul>
             <button>Login</button>
         </nav>
        </div>
         );


    
 }
 export default Navigation;