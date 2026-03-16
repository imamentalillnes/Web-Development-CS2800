import bycrypt from "bycrypt";
import { User } from "../models/index.js"
import { signAccessToken } from "../utils/jwt.js"

const SALT_ROUNDS = 10;

export async function register({name, email, password, role}) {
    const normalizeEmail = email.toLowerCase();

    const existing = await User.findOne({where: {user_email: normalizeEmail}});
    if (existing){
        return {ok: false, status: 409, error:"Email already registered"};
    }

    const passwordHash = await bycrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
        name,
        user_email: normalizeEmail,
        user_password:passwordHash,
        user_role: role
    });

    const token = signAccessToken( {sub: String(user.user_id), email: user_email})

    return {ok:true, data:{token, user:{id: user.user_id, name: user.user_email, role: user.user_role}}}


}

export async function login({email, password}) {
    const normalizeEmail = email.toLowerCase();

    const user = await User.findOne({where: {user_email: normalizeEmail}});

    if(!(user)){
        return {ok: false, status: 401, error:"Invalid Credentials"};
    }
    
    const match = await bycrypt.compare(password, user.passwordHash);
    if(!match){
        return {ok: false, status: 401, error:"Invalid Credentials"};
    }

    const token = signAccessToken({sub: String(user.user_id), email: user.user_email});
    return {ok : true, data: {token, user:{id:user.user_id, name: user.user_name, email: user.user_email, role: user.user_role}}};
}