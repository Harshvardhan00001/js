let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch(command){
    case "tree":
        // let tree=require("./commands/tree");
        // tree.fn(inputArr[1]);
        console.log("tree command is under development"+path);
        break;  
    case "organize":
        // let organize=require("./commands/organize");
        // organize.fn(inputArr[1]);
        console.log("organize command is under development"+path);
        break;          
    case "help":
        // let help=require("./commands/help");
        // help.fn();
        console.log("help command is under development");
        break;      
    default:
        console.log("Please enter a valid command");
        break;  
}