import User from "../models/user.js";
import { BaseLogger, ElasticLogger} from "../crossCuttingConcerns/logging/logger.js";
import { UserService } from "../services/userService.js";

console.log("user component yüklendi");

let logger1 = new BaseLogger();
let userService = new UserService(logger1);

// let user = new User();
let user1 = new User(1,"engin","demiroğ","ankara");
let user2 = new User(2,"git","hub","muğla");
userService.add(user1);
userService.add(user2);




userService.getById(11);
console.log(userService.list());
console.log(userService.getById(2));

