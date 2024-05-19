import Contacts from "./contacts.js";
import { program } from "commander";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = Contacts.listContacts();
      return contacts
      break;

    case "get":
      const contact = Contacts.getContactById(id);
      return contact
      break;

    case "add":
      const addedContact = Contacts.addContact({name, email, phone});
      return addedContact
      break;

    case "remove":
      const removedContact = Contacts.removeContact(id);
      return removedContact
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options).then(console.log).catch(console.error)
