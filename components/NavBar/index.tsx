import { Card, Text,Button, Row } from "@nextui-org/react";
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
      <Card css={{backgroundColor:"#7DAA92"}}>
        <div className={Style.compContainer}>
          <div className={Style.title}>
            <Text 
             css={{color:"white"}}
            h1>GET SOME NEWS TODAY!</Text>
            <Card.Divider
           
            />
          <Button.Group>
            <Button ghost css={{backgroundColor:"white"}} onClick={()=>{getNewData("Science")}}>Science</Button>
            <Button ghost css={{backgroundColor:"white"}} onClick={()=>{getNewData("Sports")}}>Sports</Button>
            <Button ghost css={{backgroundColor:"white"}} onClick={()=>{getNewData("Technology")}}>Technology</Button>
            <Button ghost css={{backgroundColor:"white"}} onClick={()=>{getNewData("Dogs")}}>Dogs</Button>
          </Button.Group>
          </div>
          
          <SearchBar getNewData={getNewData} setNewsArray={setNewsArray} />
        </div>
      </Card>
    </>
  );
}
