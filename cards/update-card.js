//METHOD: PUT 
//URL: 'https://api.trello.com/1/cards/{id}?key=APIKey&token=APIToken'

/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//NEW TITLE SHOULD BE SAVED 
pm.test("Card title should be changed",function(){
    pm.expect(body.name).to.equal("Update Test")
});

//CARD SHOULD BE MOVED TO 'IN PROGRESS' LIST 
pm.test("Card should be moved to 'IN PROGRESS' column",function(){
    pm.expect(body.idList).to.equal("69b22c066aa8eb362b05bbe9")
});

//CLOSED ATRIBUTE SHOULD NOT BE CHANGED 
pm.test("Card should not be closed",function(){
    pm.expect(body.closed).to.equal(false)
});