///-- METHOD: POST 
/// URL:  'https://api.trello.com/1/boards/{id}/labels?name={name}&color={color}&key=APIKey&token=APIToken'

///PRE-REQUEST SCRIPT 

//ADD LABEL NAME AND COLOR 
pm.collectionVariables.set("name","Report")
pm.collectionVariables.set("color","orange")

//POST-RESPONSE SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//RESPONSE SHOULD CONTAIN CORRECT BOARD ID 
pm.test("Board ID should match",function(){pm.expect(body.idBoard).to.equal("69afa0e90da938f3cde16035")});

//LABEL NAME SHOULD BE 'Report' 
pm.test("Label name should be 'Report' ",function(){
    pm.expect(body.name).to.equal("Report");
});
//LABEL COLOR SHOULD BE 'orange' 
pm.test("Label name should be 'orange' ",function(){
    pm.expect(body.name).to.equal("Report");
});