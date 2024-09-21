'use client'


import axios from "axios";

export const getApiUser = async (id:string) => {
 const res = await axios.get(`https://be-e-commerce-tohe.onrender.com/api/auth/getDetailUser/${id}`)
 return res.data
 
};

