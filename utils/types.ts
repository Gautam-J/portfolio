export interface IRole {
  _id: string;
  role: string;
}

export interface IMessage {
  msg: string;
}

export interface IAbout {
  description: string;
}

export interface IExperience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date | string;
}

export interface IProps {
  roles: IRole[];
  about: IAbout;
  experience: IExperience[];
}
