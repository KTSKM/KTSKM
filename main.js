let details = navigator.userAgent;
  
/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;
  
/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);
  
if (isMobileDevice) {
    alert("Website has been designed with PCs in mind, sorry for the inconvinence! ")
} else {
    console.log("desktop compatible!");
}