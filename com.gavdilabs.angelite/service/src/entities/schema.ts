export interface IUser {
  ID: string;
  createdAt?: Date;
  createdBy?: string;
  modifiedAt?: Date;
  modifiedBy?: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
}

export enum Entity {
  User = "schema.User",
}

export enum SanitizedEntity {
  User = "User",
}
