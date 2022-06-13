import { NewsCardTS } from '../types'
import NewsCardsList from "../components/NewsCardsList"
import SearchBar from "../components/SearchBar"
import React, {useState} from "react"


interface Props{
  data:NewsCardTS[]
}


export default function Home({data}:Props):JSX.Element{

  const [newsArray, setNewsArray] = useState(data)


  return(<>
  <SearchBar
  setNewsArray={setNewsArray}
  />
  <NewsCardsList
  newsArray={newsArray}/>
  </>)
}


export async function getServerSideProps(){

   

  const response = await fetch("http://localhost:3000/api/news/global")
  const data = (await response.json()).payload


  return{
    props:{data}
  }
}