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
     console.log("addContact22 called");
     this.main();
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
   getContactCount(){
     return this.contacts.length;
   }
   
   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }
 }