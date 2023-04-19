// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { translate } from "../../libs/italianTranslation";
import React from 'react'
import { zodiacSigns } from "../../../assets/zodiacSigns";
export default function handler(req, res) {
  const translated = translate(zodiacSigns.map((z) => ({ name: z.name }))).map((t,i)=>({name:t.name, icon: zodiacSigns[i].icon}))
  
  res.status(200).json({ name: translated });
}
