import express from "express";
import {Request, Response, NextFuntion} from "express";
import UserController from "../controllers/user";

class UserHttphHandler{

    const tweetContoller = new UserController();

    async getUser(request:Request, response: Response, next: NextFuntion){
        try{
            const tweet = await this.getUsers();
            request.json(user)

        } catch(error) {
            next(error)
            
        }
    }


    async getTUsersByID(request:Request, response: Response, next: NextFuntion){
    }

    async upadateUsers(request:Request, response: Response, next: NextFuntion){
    }

    async deleteUser(request:Request, response: Response, next: NextFuntion){
    }

}

export defualt UserHttphHandler;