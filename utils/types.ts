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

export interface IDegree {
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}

export interface ICertification {
  name: string;
  organization: string;
  issueDate: Date;
  credential: string;
}

export interface IProps {
  roles: IRole[];
  about: IAbout;
  experience: IExperience[];
  degrees: IDegree[];
  certifications: ICertification[];
}
