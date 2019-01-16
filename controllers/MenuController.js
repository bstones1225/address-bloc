const inquirer = require('inquirer');
const ContactController = require("./ContactController");

 module.exports = class MenuController {
   constructor(){
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "View all contacts",
          "Exit",
          "Date"
        ]
      }
    ];
    this.book = new ContactController();
}
   main(){
   console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
           this.addContact();
           break;
        case "View all contacts":
          this.getContacts();
          break;
         case "Exit":
           this.exit();
         case "Date":
           this.getDate();
         default:
           console.log("Invalid input");
           this.main();
       }
     })
     .catch((err) => {
       console.log(err);
     });
   }

   clear(){
     console.log("\x1Bc");
   }
   addContact(){
     this.clear();
     inquirer.prompt(this.book.addContactQuestions).then((answers) => {
       this.book.addContact(answers.name, answers.phone).then((contact) => {
         console.log("Contact added successfully!");
         this.main();
       }).catch((err) => {
         console.log(err);
         this.main();
       });
     });
   }
   getDate(){
   this.clear();
   const d = new Date();
   const month = d.getMonth() + 1;
   const year = d.getFullYear();
   const day = d.getDate();
   console.log(month + "/"+ day + "/" + year);
   this.main();
   }
   getContacts(){
  this.clear();

  this.book.getContacts().then((contacts) => {
    for (let contact of contacts) {
      console.log(`
      name: ${contact.name}
      phone number: ${contact.phone}
      email: ${contact.email}
      ---------------`
      );
    }
    this.main();
  }).catch((err) => {
    console.log(err);
    this.main();
  });
}
   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }
 }
