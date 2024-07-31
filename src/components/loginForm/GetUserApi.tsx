'use client'


import axios from "axios";

export const getApiUser = async (id:string) => {
 const res = await axios.get(`${process.env.URL}/auth/getDetailUser/${id}`)
 return res.data
 
};

