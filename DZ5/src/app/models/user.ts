
export class Member {
  name!: string;
  email!: string;
  occupation!: string;
  wantToWorkInExistek!: boolean;
  joiningDate!: Date;
  address!: HomeAddress;
  technologies!: Technology[];

}

export class HomeAddress {
  country!: string;
  city!: string;
  street!: string;
  homeNumber!: number;
  constructor() {
  }

}

export class Technology {
  name: string;
  tag: Tag;

  constructor( name: string, tag: Tag) {
    this.name = name;
    this.tag = tag;
  }

}

export enum Tag {
  FRONTEND,
  BACKEND,
  DEVOPS

}