///METHOD: GET
///url 'https://api.trello.com/1/cards/{id}/members?key=APIKey&token=APIToken'

/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//CARD SHOULD CONTAIN MEMBER NAME
pm.test("Card should contain member name",function(){
    pm.expect(body.fullName).to.equal("Martuu")
});
