//  import { Linter } from "eslint";
// import SelectCountrie from "./SelectCountrie";
import { useState } from "react";
function Countries() {
let winners = [{year: 2000, champion: "Cameroon"},{year: 2002, champion: "Cameroon"},{year: 2004, champion: "Tunisia"},{year: 2006, champion: "Egypt"},{year: 2008, champion: "Egypt"},{year: 2010, champion: "Egypt"},{year: 2012, champion: "Zambia"},{year: 2013, champion: "Nigeria"},{year: 2015, champion: "Ivory Coast"},{year: 2017, champion: "Cameroon"},{year: 2019, champion: "Algeria"},{year: 2021, champion: "Senegal"} ]
// const selectCont = (p) => {console.log(p)  }
// let schow = (i) => { console.log(i)  }

let [val, setVal] = useState(0);
const incre = () => { setVal(val+1); console.log(val) }

return (
    <>
      <br /><br />
      <h2>The winning teams of the African Cup since the 2000s</h2>

     {
     winners.map((winner,index) =>
     (  <button   key= {index}> {winner.year}  / {winner.champion}</button>  )  )
    //  <SelectCountrie  champion= {winner.champion}/>
    
     }  
{/* {console.log(winners[7])} */}

<br /><br /><br /><br />
     <h3>Select the button to show more informations about the winner:</h3>
       <button onClick={incre}> Click here  </button>
       {/* <h1>{champion}</h1> */}
    

{ val<12?
    ( <h5>{winners[val].champion}</h5>)
: val = 0
}

{/* {<SelectCountrie  />} */}
    </>
  );

  // import { useState } from "react";

  // function SelectCountrie({champion}) {
  // let [val, setVal] = useState(0);
  // const incre = () => { setVal(val+1); console.log(val) }
  //   return (
  // <>
  // <br /><br /><br /><br />
  //     <h3>Select the button to show more informations about the winner:</h3>
  //     <button onClick={incre}> Click here  </button>
  //     <h1>{champion}</h1>
  //   <h5>{val}</h5>
  //     </> 
  //     );
      
      // ;
  
  
  








}

export default Countries;
