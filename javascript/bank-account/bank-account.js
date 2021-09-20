export class BankAccount {
  constructor() {
  }

  open() {
    if(this.state == "open"){
      throw new ValueError();
    }else{
      this.state = "open";
      this._balance = 0;
    }
  }

  close() {
    if(this.state != "closed"){
      this.state = "closed"; 
    }else{
      throw new ValueError();
    }
  }

  deposit(amount) {
    if(this.state == "open" && amount >= 0){
      return this._balance = this._balance + amount;
    }else{
      throw new ValueError();
    }
  }

  withdraw(amount) {
    if (this.state == "closed"){
      throw new ValueError();
    }else if (amount > 0 && this._balance >= amount){
      return this._balance -= amount;
    }else{
      throw new ValueError();
    }
  }

  set balance(amount) {
    if (this.state == "closed"){
      throw new ValueError();
    }else {
      return this._balance += amount;
    }
  }

  get balance() {
    if (this.state == "closed"){
      throw new ValueError();
    }else{
      return this._balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

