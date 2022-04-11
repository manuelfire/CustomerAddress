export default interface ICustomer{
    _id:number;
    firstName: String;
    lastName: String;
    address: String;
    city: String;
    state: String;
    country: String;
    zipCode: String;
    isEditable: boolean;
    isDeleted : boolean;
  }