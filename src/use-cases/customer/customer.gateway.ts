//show return datatype as entity

export default interface GenerateCustomerGatewy {
  startTransaction(): Promise<void>;
  commitTransaction(): Promise<void>;
  rollbackTransaction(): Promise<void>;
  findCustomerByEmail(email: string): Promise<any>;
  customerSignIn(data: any): Promise<any>;
  deleteCustomerById(id: string): Promise<any>;
  findCustomerById(id: string): Promise<any>;
  editProfile(id: string, input: any): Promise<any>;
}
