export interface IRole {
  role: string;
}

export interface IMessage {
  msg: string;
}

export interface IAbout {
  description: string;
}

export interface IExperience {
  _id: string;
  minStartDate: Date;
  maxEndDate: Date;
  onGoing: boolean;
  positions: string[];
}

export interface IProps {
  roles: IRole[];
  about: IAbout;
  experience: IExperience[];
}
