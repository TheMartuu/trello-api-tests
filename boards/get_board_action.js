/// POST-REQUEST SCRIPT 
const body = pm.response.json();

///STATUS SHOULD BE 200 OK
pm.test("Status should be 200 OK", function(){
    pm.response.to.have.status(200);
    });

//RESPONSE SHOULD RETURN CORRECT BOARD ID 
pm.test("Board ID should match", function (){
    pm.expect(body[0].data.board).to.equal
    
});

//TYPE SHOULD BE 'ADD CHECKLIST TO CARD'
pm.test("Type should be 'addChecklistToCard'", function(){
    pm.expect(body[0].type).to.equal('addChecklistToCard');
});