//METHOD: GET 
//URL: 'https://api.trello.com/1/cards/{id}?key=APIKey&token=APIToken'

/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//CARD ID SHOULD MATCH 
pm.test("Card Id should match",function(){
    pm.expect(body.id).to.equal("69b22cd82d9df3b922b61d07");
});

//CARD NAME SHOULD MATCH 
pm.test("Card Name should match",function(){
    pm.expect(body.name).to.equal("Create notes for the meeting");
});

//CARD COVER SIZE SHOULD MATCH 
pm.test("Card cover size should match",function(){
    pm.expect(body.cover.size).to.equal("normal");
});
