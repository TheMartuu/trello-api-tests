/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//CARD SHOULD CONTAIN CORRECT BOARD ID
pm.test("Card should contain correct board id",function(){
    pm.expect(body[0].idBoard).to.equal("69afa0e90da938f3cde16035");
})

//CARD SHOULD CONTAIN CORRECT NAME 
pm.test("Card should contain correct name",function(){
    pm.expect(body[0].name).to.equal("Get card test");
});