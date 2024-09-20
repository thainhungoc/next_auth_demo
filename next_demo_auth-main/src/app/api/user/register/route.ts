import { RegisterDTO } from '@/apis/user.api';
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt';
import fs from 'fs';

export async function POST(request: Request) {
    let body: RegisterDTO = await request.json();
    body.password = bcrypt.hashSync(body.password, 10);
    let userList = JSON.parse(fs.readFileSync('user.json', 'utf-8'));

    for(let i in userList) { 
        if(userList[i].email == body.email || userList[i].userName == body.userName) {
            return NextResponse.json({
                message: "Username or Email already exists"
            }, {status: 400});
        }
    }

    userList.push({
        ...body,
        id: userList.length + 1,
        email_verified: false,
        name: ""
    })


    fs.writeFileSync("user.json", JSON.stringify(userList));
    return NextResponse.json({
        message: "User registered successfully"
    });
}