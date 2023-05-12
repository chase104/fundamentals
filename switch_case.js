
let person = "Sarah";


let message;

switch(person) {
    case ("Daren"): 
    message = `Daren in the user`
    break;
    case ("Daniel"):
        message = `Daniel in the user`
    break;
    case("Chase"):
        message = `Chase in the user`
    break;
    default:
        message = "no user with this name"
    break;
};



let user = {
    name: "Daren",
    role: "admin"
}

const reject = () => {
    console.log("permission denied");
}

const rejectAndRequestPermission = () => {
    console.log("premission denied... requesting permission");
}

const makeChange = () => {
    console.log("making change");
}

const changeImportantData = () => {
    // only admins can do this
    switch(user.role) {
        case ("normal"):
            reject()
        break;
        case ("special"):
            rejectAndRequestPermission()
        break;
        case ("admin"):
            makeChange()
        break;
    }

}