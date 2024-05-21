import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function TemaValaszto() {
  const [temak, setTemak] = useState([]);

  useEffect(() => {
    const getTemak = async () => {
      const apiTemak = await axios.get("http://localhost:8000/api/temak");
      console.log(apiTemak.data);
      setTemak(apiTemak.data);
    };
    getTemak();
  }, []);

function handleClick(){
    
}

  return (
    <div>
      <select name="tema" id="tema">
        {temak.map((item, key) => (
          <option value={item} key = {item} onClick={handleClick}> {item.temanev}</option>
        ))}
      </select>
    </div>
  );
}
