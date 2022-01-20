import { ObjectId } from "mongodb";

export interface IRole {
  _id?: ObjectId;
  role: string;
}

export interface IMessage {
  msg: string;
}
