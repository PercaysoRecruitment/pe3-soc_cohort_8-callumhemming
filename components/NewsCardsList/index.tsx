import {NewsCardTS} from "../../types"
import Style from "./NewsCardsList.module.css"
import NewsCard from "../NewsCard"
import {v4} from "uuid"

interface Props{
    newsArray:NewsCardTS[]
}

export default function NewsCardList({newsArray}:Props):JSX.Element{


    return(<>
    <div className={Style.compContainer}>

        {
        
        newsArray.map((newsItem : NewsCardTS)=>{
            return (
                <NewsCard
                key={v4()}
                {...newsItem}
                />
            )
        })
        
        }

    </div>
    </>)
}