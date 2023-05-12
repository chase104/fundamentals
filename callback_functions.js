// callback functions
// a function we give to another function to be used later (usually no name)
// receiving function

const useFunction = (callback) => {
    console.log("I'm going to use the function the user gave me");
    callback()
}

useFunction(changeImportantData)

useFunction(reject)



setTimeout(() => {
    console.log("I'm doing great!");
}, 3000);

