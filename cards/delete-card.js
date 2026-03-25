//METHOD: DELETE 
//URL: 'https://api.trello.com/1/cards/{id}?key=APIKey&token=APIToken'


/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });