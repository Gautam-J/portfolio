import { ObjectId } from "mongodb";

export interface IRole {
  _id?: ObjectId | string;
  role: string;
}

export interface IMessage {
  msg: string;
}
