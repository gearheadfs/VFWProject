// Dave Johnson
// 09/08/12
// Visual Frameworks 1209
// Assignment 2

//Wait until DOM is ready
window.addEventListener("DOMContentLoaded", function(){
    
    //getElementbyID function **Shortcut Function**
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    //Create select field element and populate with options
    function chooseState(){
        var formTag = document.getElementsByTagName("form");
            selectLi = $('select');
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "state");
        for(var i=0, j=orderForm.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = orderForm[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    //Find value of selected radio button
    function getSelectedRadio(){
        var radios = document.forms[0].crust
        for(var i=0; i<radio.length; i++){
            if(radios[i].checked){
            crustValue = radios[i].value;
            pudValue = radios[i].value;
        }
    }
}
    function getCheckboxValue(){
        if($('toppings').checked){
            toppingsValue = $('toppings').value;
        }else{
            toppingsValue = "None"
        }
    }
    function storeData(){
        var id              = Math.floor(Math.random()*10000000001);
        // Gather up all form field values and store in an object
        //Object properties contain array with the form label and input value
        var item            ={};
            item.firstname  =["First Name:", $('firstname').value];
            item.lastname   =["Last Name:", $('lastname').value];
            item.address    =["Address:", $('address').value];
            item.city       =["City:", $('city').value];
            item.state      =["State:", $('states').value];
            item.crust      =["Crust", crustValue];
            item.toppings   =["Toppings", toppingsValue];
            item.quantity   =["Quantity", $('qty').value];
            item.deliver    =["Pick Up Or Deliver", pudValue];
            item.date       =["Date:", $('date').value];
            item.instruct   =["Special Instructions", $('specialInstructions').value];
        //Save data into local storage: Use stringify to convert object to a string
        localStorage.setItem(id, JSON.stringify(item));
         alert("Thank you for your order.");
    }
    function getData(){
        //Write data from local storage to the browser.
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        for(var i=0, len=localStorage.length; i<len; i++){
            var makeLi = document.createElement('li');
            makeList.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Convert the string from local storage value back to an object by using JSON.parse()
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeLi.appendChild(makeSubList);
            for(var k in obj){
                var makeSubLi = document.createElement('li');
                makeSubList.appendchild(makeSubLi);
                var optSubText = obj[k][0]+" "+obj[k][1];
                makeSubLi.innerHTML = optSubText;
            }
        }
    }
    
    //Variable defaults
    var orderForm = [
                 "--Choose a State--",
                 "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO",
                 "MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
                ],
        crustValue;
        toppingsValue = "None";
        chooseState();
        
   
    
    
    
  //Set link & submit click events
    var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);/*
    var clearLink = $('clear');
    clearLink.addEventListener("click", clearlocal);*/
    var save = $('submit');
    save.addEventListener("click", storeData);
    

    
    
    
});

