import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { sequelize } from '../instances/mysql';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{

    try { 
        await sequelize.authenticate()
        console.log('All good, bro.')
    } catch(error){
        console.log('Deu problema :/ Erro: ', error)
    }

    let users = await User.findAll()
    console.log(JSON.stringify(users))

    res.render('pages/home', {
        users
    })

    //let age: number = 90;
    //let showOld: boolean = false;

    //if(age > 50) {
    //    showOld = true;
    //}
    //
    //let list = Product.getAll();
    //let expensiveList = Product.getFromPriceAfter(12);
    //
    //res.render('pages/home', {
    //    name: 'Viviane',
    //    lastName: 'de Lima',
    //    showOld,
    //    products: list,
    //    expensives: expensiveList,
    //    frasesDoDia: []
    //});
}