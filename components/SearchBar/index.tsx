import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import SendButton from "./SendButton"
import Style from "./Searchbar.module.css"

interface Props {
    setNewsArray:any
}

export default function SearchBar({setNewsArray}: Props): JSX.Element {
  const [input, setInput] = useState("");

  async function getNewData(query:string){

    const response = await fetch(`/api/news/${query}`)
    const data = (await response.json()).payload

    setNewsArray(data)
  }

  return (
    <div className={Style.align}>

    <div className={Style.compContainer}>
      <Input
      placeholder="Enter Search Here"
        onChange={e => setInput(e.target.value)}
        // contentRight={<SendButton onClick={()=>{getNewData(input)}}/>}
      />
      <Button color="gradient" onClick={()=>getNewData(input)}>Send</Button>
    </div>
    </div>
  );
}
