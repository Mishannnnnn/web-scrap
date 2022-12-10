let scrapeEmails = document.getElementById
 ('scrapeEmails');

 scrapeEmails.addEventListener("click", async () => {

// Get current active tab
let [tab] = await chrome.tabs.query({active:
    true, currentWindow: true});

    //Execute script to parse emails on page
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapeEmailsFromPage,
    });
 })

 //function to scrape emails
 function scrapeEmailsFromPage(){
    // RegEx to parse emails from html code 
const emailRegEx =  /[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/ 
gim; 

     //parse emails from the whole HTml page
     let emails = document.body.innerHTML.match
     (emailRegEx);

     alert(emails);
    }
