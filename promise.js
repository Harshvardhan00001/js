// promise is a object representing the eventual completion or failure of an asynchronous operation.

const promise = new Promise((resolve, reject) => {
  const success = false;          
    setTimeout(() => {


        if (success) {
            resolve('Operation completed successfully.');
        } else {
            reject('Operation failed.');
        }                   
    }, 1000); 
});

promise
  .then((message) => {
    console.log(message); // Handle success
  })
  .catch((error) => {
    console.error(error); // Handle failure
  });       