import { NextResponse } from 'next/server'
import React from 'react'

export default function route() {
    let body = await req.json();
    console.log("body", body)
  return NextResponse.json({message:"Da vao thanh cong"})
}
