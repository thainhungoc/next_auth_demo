import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import fs from 'fs'
const maBaoMat = "ntbphuoc"
export async function POST(req: Request) {
    let body = await req.json();
    let token = body.token;
    if(!token) {
        return NextResponse.json({
            message: "Token not found"
        }, {status: 401});
    }
    
    try {
        let decodeToken: any = jwt.verify(token, maBaoMat);
        let userList = JSON.parse(fs.readFileSync('user.json', 'utf-8'));
        let user = userList.find((item: any) => item.userName == decodeToken.userName);
        if(!user) {
            return NextResponse.json({
                message: "User not found"
            }, {status: 404});
        }
        return NextResponse.json(user)
    }catch(err) {
        return NextResponse.json({
            message: "Token is invalid"
        }, {status: 401});
    }
}