'use client'


import axios from "axios";

export const getApiUser = async (id:string) => {
 const res = await axios.get(`http://localhost:5000/api/auth/getDetailUser/${id}`)
 return res.data
 
};

