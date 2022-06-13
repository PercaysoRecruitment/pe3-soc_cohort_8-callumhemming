import { NewsCardTS } from '../types'
import NewsCardsList from "../components/NewsCardsList"
import SearchBar from "../components/SearchBar"
import React, {useState} from "react"
import NavBar from "../components/NavBar"


interface Props{
  data:NewsCardTS[]
}


export default function Home({data}:Props):JSX.Element{

  const [newsArray, setNewsArray] = useState(data)


  return(<>

    <NavBar
    setNewsArray={setNewsArray}
    />

  <NewsCardsList
  newsArray={newsArray}/>
  </>)
}


export async function getServerSideProps(){

   const fetchString = `https://pe3-soc-cohort-8-callumhemming.vercel.app/api/news/global`

  const response = await fetch(fetchString)
  const data = (await response.json()).payload


  return{
    props:{data}
  }
}