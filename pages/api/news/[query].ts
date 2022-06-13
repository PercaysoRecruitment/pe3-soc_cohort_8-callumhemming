import type { NextApiRequest, NextApiResponse } from "next";
import {apiBase, apiToken} from "../../../config"

type Data = {
    success: boolean;
    payload: any[]
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {

    // res.status(200).json({success:true, payload:[`${apiBase}${query}${apiToken}`]})
    
    const {query} = req.query
    const fetchString = `${apiBase}${query}${apiToken}`
    const response = await fetch(fetchString)
    const data = (await response.json()).articles

    res.status(200).json({success:true, payload:data})


  } else {
    res.status(400).json({success:false, payload:[]})
  }
}
