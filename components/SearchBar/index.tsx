import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import SendButton from "./SendButton";
import Style from "./Searchbar.module.css";

interface Props {
  setNewsArray: any;
  getNewData: any;
}

export default function SearchBar({
  setNewsArray,
  getNewData,
}: Props): JSX.Element {
  const [input, setInput] = useState("");

  return (
    <div className={Style.align}>
      <form onSubmit={e => e.preventDefault()} className={Style.compContainer}>
        <div className={Style.searchBar}>
          <Input
            autoFocus
            size="lg"
            placeholder="Enter Search Here"
            onChange={e => setInput(e.target.value)}
            // contentRight={<SendButton onClick={()=>{getNewData(input)}}/>}
          />
        </div>
        <Button
        css={{backgroundColor:"#8E4A49"}}
          size="sm"
          color="success"
          type="submit"
          onClick={e => {
            getNewData(input);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
