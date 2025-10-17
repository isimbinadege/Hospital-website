import React from "react";
import nurseImg from '../assets/images/anurse.png';
 function Home() {
    return(
  <div className="flex items-center gap-8">
    <div >
   <h1>Caring Beyond Treatment</h1>
    </div>
    <div>
      <img src={nurseImg} alt="Nurse" className="rounded-lg w-120" />
    </div>
  </div>

    )
 }
 export default Home 