const Customer(name) => {
  this.name = name;
  this.say = (name) => {
    log.add(`I am customer ${name}`)
  }
}

const CustomerFactory = () =>{
  this.create = (name) => {
    return new Customer(name);
  }
}

const log = () => {
  let log = "";

  return {
      add: function (msg) { log += msg + "\n"; },
      show: function () { alert(log); log = ""; }
  }
}

export const factory = () => {
  let persons = [];
  
  let customerFactory = new CustomerFactory();

  persons.push(customerFactory.create("Julian Inwood"))

  for (var i = 0, len = persons.length; i < len; i++) {
    persons[i].say();
}
log.show();
}
