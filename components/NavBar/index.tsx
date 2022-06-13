import { Card, Text,Button } from "@nextui-org/react";
import SearchBar from "../SearchBar";
import Style from "./NavBar.module.css";

interface Props {
  setNewsArray: any;
}

export default function NavBar({ setNewsArray }: Props): JSX.Element {


    async function getNewData(query:string){

        const response = await fetch(`/api/news/${query}`)
        const data = (await response.json()).payload
    
        setNewsArray(data)
      }


  return (
    <>
      <Card>
        <div className={Style.compContainer}>
          <div className={Style.title}>
            <Text h1>Get some news!</Text>
          </div>
          
          <SearchBar getNewData={getNewData} setNewsArray={setNewsArray} />
          <Button.Group>
            <Button onClick={()=>{getNewData("Science")}}>Science</Button>
            <Button onClick={()=>{getNewData("Sports")}}>Sports</Button>
            <Button onClick={()=>{getNewData("Technology")}}>Technology</Button>
            <Button onClick={()=>{getNewData("Dogs")}}>Dogs</Button>
          </Button.Group>
        </div>
      </Card>
    </>
  );
}
