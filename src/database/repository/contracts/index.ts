export interface IAuthRepository<T> {
  register(
    phone: string,
    password: string,
    email: string,
    salt: string
  ): Promise<T>;
  find(email: string): Promise<T | null>;
  findById(_id: string): Promise<T | null>;
}


export interface IUserRepository<T> {
  find(email: string): Promise<T | null>;
  findById(_id: string): Promise<T | null>;
  update(_id: string, {}: Object): Promise<T | null>;
  addAddress(_id: string, {}: Object): Promise<T | null>;
  addCompany(_id: string, {}: Object): Promise<T | null>;
}


export interface IAddressRepository<T> {
  find(_id: string): Promise<T | null>;
  update(
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    lat: number,
    lng: number
  ): Promise<T | null>;
  create(
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    lat: number,
    lng: number
  ): Promise<T | null>;
  delete(_id: string): void;
}


export interface ICompanyRepository<T> {
  find(_id: string): Promise<T | null>;
  update(
    name: string,
    catchPhrase: string,
    bs: string,
    code: string
  ): Promise<T | null>;
  create(
    name: string,
    catchPhrase: string,
    bs: string,
    code: string
  ): Promise<T | null>;
  delete(_id: string): void;
}



