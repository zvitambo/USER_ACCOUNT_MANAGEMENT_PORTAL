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
}

