import { LoginDTO } from '@/apis/user.api';
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt';
import fs from 'fs';
import jwt from 'jsonwebtoken';
const maBaoMat = "ntbphuoc"
export async function POST(request: Request) {
    let body: LoginDTO = await request.json();
    let userList = JSON.parse(fs.readFileSync('user.json', 'utf-8'));
    let user = userList.find((item: any) => item.userName == body.loginName)
    if(user) {
        // tìm thấy check password
        if(bcrypt.compareSync(body.password, user.password)) {

            let token = jwt.sign({userName: user.userName}, maBaoMat, {expiresIn: '1h'});

            return NextResponse.json({
                message: "Login successfully",
                token: token
            });
        }else {
            return NextResponse.json({
                message: "Password is incorrect"
            }, {status: 401});
        }
    }else {
        // không thấy
        return NextResponse.json({
            message: "User not found"
        }, {status: 404});
    }
}