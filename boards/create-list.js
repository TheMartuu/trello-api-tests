///METHOD: POST
///URL:   'https://api.trello.com/1/boards/{id}/lists?name={name}&key=APIKey&token=APIToken' \

///PRE-REQUEST SCRIPT
pm.collectionVariables.set("list_name", "New List Test");
pm.collectionVariables.set("position", "top");

//POST-RESPONSE SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

///TITLE SHOULD MATCH LIST_NAME
pm.test("List should contain title 'New List Test",function(){
    pm.expect(body.name).to.eql("New List Test");
});

//BOARD ID SHOULD MATCH 
pm.test("Board ID should contain match id",function(){
    pm.expect(body.idBoard).to.eql("69afa0e90da938f3cde16035");
});

