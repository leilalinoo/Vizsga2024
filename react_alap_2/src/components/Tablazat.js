import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Tablazat = () => {
  const [szavak, setSzavak] = useState([]);

  useEffect(() => {
    const getSzavak = async () => {
      const apiSzavak = await axios.get("http://localhost:8000/api/szavak");
      console.log(apiSzavak.data);
      setSzavak(apiSzavak.data);
    };
    getSzavak();
  }, []);

/*       function handleChange(event){
        console.log( event.target.value)
        if(event.target.value === value){
            console.log("fasza")
        }
  }   */

  return (
    <div className="nagydiv">
      <div className="sor cimek">
        <h3>MAGYAR</h3>
        <h3>ANGOL</h3>
        <h3>VISSZAJELZÉS</h3>
      </div>
      <div className="kviz">
        {szavak.map((item) => (
          <div className="sor" key={item.id}>
            {item.magyar}
            <input type="text"  /* value={item.angol}   onChange={handleChange} */  />
            <p>X</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tablazat;
