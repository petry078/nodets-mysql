import { query, Request, Response } from 'express';
import { Product } from '../models/Product';
import { User } from '../models/User';
import {Op} from 'sequelize'
import { read } from 'fs';

export const home = async (req: Request, res: Response)=>{
    const users = await User.findAll()
    res.render('pages/home',{users})
    
};

export const newUser = async (req: Request, res: Response)=>{
    let userName = req.body.name
    let userAge = req.body.age

    await User.create({
        name: userName,
        age: userAge
    })

    res.redirect('/')
};