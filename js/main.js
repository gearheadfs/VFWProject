// Dave Johnson
// 09/13/12
// Visual Frameworks 1209
// Assignment 3

//Wait until DOM is ready
window.addEventListener("DOMContentLoaded", function(){
    
    //getElementbyID function **Shortcut Function**
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    //Create select field element and populate with options
    function makeState(){
        var formTag = document.getElementsByTagName("form");
            selectLi = $('select');
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "states");
        for(var i=0, j=orderForm.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = orderForm[i];
            makeOption.setAttribute("select", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    function getSelectedState(){
        var stateSelected = document.forms[0].select;
        for (var i=0; i<stateSelected.length; i++){
            if (stateSelected[i].checked){
                selectValue = stateSelected[i].value;
            }
        }
    }
    
    //Find value of selected radio button
    function getSelectedRadioCrust(){
        var radiosCrust = document.forms[0].crust;
        for(var i=0; i<radiosCrust.length; i++){
            if(radiosCrust[i].checked){
            crustValue = radiosCrust[i].value;
        }
    }
}

    function getSelectedRadioMethod(){
        var radiosMethod = document.forms[0].method;
        for(var i=0; i<radiosMethod.length; i++){
            if(radiosMethod[i].checked){
            methodValue = radiosMethod[i].value;
        }
    }
}

    function getCheckboxValue(){
        if($('xtracheese').checked){
            xtracheeseValue = $('xtracheese').value;
            
        }else{
            xtracheeseValue = "None"
        }
        if($('pepperoni').checked){
            pepperoniValue = $('pepperoni').value;
            
        }else{
            pepperoniValue = "None"
        }
        if($('sausage').checked){
            sausageValue = $('sausage').value;
            
        }else{
            sausageValue = "None"
        }
        if($('bacon').checked){
            baconValue = $('bacon').value;
            
        }else{
            baconValue = "None"
        }
        if($('onion').checked){
            onionValue = $('onion').value;
            
        }else{
            onionValue = "None"
        }
        if($('grnpepper').checked){
            grnpepperValue = $('grnpepper').value;
            
        }else{
            grnpepperValue = "None"
        }
        if($('mush').checked){
            mushValue = $('mush').value;
            
        }else{
            mushValue = "None"
        }
        if($('bbq').checked){
            bbqValue = $('bbq').value;
            
        }else{
            bbqValue = "None"
        }
        if($('spnch').checked){
            spnchValue = $('spnch').value;
            
        }else{
            spnchValue = "None"
        }
        if($('alfredo').checked){
            alfredoValue = $('alfredo').value;
            
        }else{
            alfredoValue = "None"
        }
        if($('chkn').checked){
            chknValue = $('chkn').value;
            
        }else{
            chknValue = "None"
        }
        if($('bsauce').checked){
            bsauceValue = $('bsauce').value;
            
        }else{
            bsauceValue = "None"
        }
        if($('rnch').checked){
            rnchValue = $('rnch').value;
            
        }else{
            rnchValue = "None"
        }
        if($('blch').checked){
            blchValue = $('blch').value;
            
        }else{
            blchValue = "None"
        }      
    }
    
    function toggleControls(n){
        switch(n){
            case "on":
                    $('info').style.display = "none";
                    $('clear').style.display = "inline";
                    $('displayLink').style.display = "none";
                    $('addNew').style.display = "inline";
                    break;
            case "off":
                    $('info').style.display = "block";
                    $('clear').style.display = "inline";
                    $('displayLink').style.display = "inline";
                    $('addNew').style.display = "none";
                    $('items').style.display = "none";
                    break;
            default:
                    return false;
        }
    }
    
    function storeData(){
        var id = Math.floor(Math.random()*10000000001);
        // Gather up all form field values and store in an object
        //Object properties contain array with the form label and input value
        getSelectedRadioCrust();
        getSelectedRadioMethod();
        getCheckboxValue();
        var item            = {};
            item.firstname  = ["First Name:", $('firstname').value];
            item.lastname   = ["Last Name:", $('lastname').value];
            item.address    = ["Address:", $('address').value];
            item.city       = ["City:", $('city').value];
            item.state      = ["State:", selectValue];
            item.phnumber   = ["Phone Number:", $('phnumber').value];
            item.crust      = ["Crust:", crustValue];
            item.xtracheese = ["Extra Cheese:", xtracheeseValue];
            item.pepperoni  = ["Pepperoni:", pepperoniValue];
            item.sausage    = ["Sausage:", sausageValue];
            item.bacon      = ["Bacon:", baconValue];
            item.onion      = ["Onion:", onionValue];
            item.grnpepper  = ["Green Pepper:", grnpepperValue];
            item.mush       = ["Mushrooms:", mushValue];
            item.bbq        = ["Barbeque:", bbqValue];
            item.spnch      = ["Spinach:", spnchValue];
            item.alfredo    = ["Alfredo:", alfredoValue];
            item.chkn       = ["Chicken:", chknValue];
            item.bsauce     = ["Buffalo Sauce:", bsauceValue];
            item.rnch       = ["Ranch:", rnchValue];
            item.blch       = ["Blue Cheese:", blchValue];
            item.quantity   = ["Quantity:", $('qty').value];
            item.method    = ["Pick Up Or Deliver:", methodValue];
            item.date       = ["Date:", $('date').value];
            item.instruct   = ["Special Instructions:", $('specialInstructions').value];
        //Save data into local storage: Use stringify to convert object to a string
        localStorage.setItem(id, JSON.stringify(item));
         alert("Thank you for your order.");
    }
    function getData(){
        toggleControls('on');
        if(localStorage.length === 0){
            alert("There is no data in Local Storage.");
            window.location.reload();
        }
        //Write data from local storage to the browser.
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i=0, len=localStorage.length; i<len; i++){
            var makeLi = document.createElement('li');
            var linksLi = document.createElement('li');
            makeList.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Convert the string from local storage value back to an object by using JSON.parse()
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeLi.appendChild(makeSubList);
            for(var k in obj){
                var makeSubLi = document.createElement('li');
                makeSubList.appendChild(makeSubLi);
                var optSubText = obj[k][0]+" "+obj[k][1];
                makeSubLi.innerHTML = optSubText;
                makeSubList.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi); //Creates edit and delete links for each list item in local storage
        }
    }
    
    //Make Item Links
    //Create the edit & delete links for each stored item when displayed
    function makeItemLinks(key, linksLi){
        //add edit single item link
        var editLink = document.createElement('a');
            editLink.href = "#";
            editLink.key = key;
            var editText = "Edit Order";
            editLink.addEventListener("click", editItem);
            editLink.innerHTML = editText;
            linksLi.appendChild(editLink);
            
            //add line break
            var breakTag = document.createElement('br');
            linksLi.appendChild(breakTag);
        
        var deleteLink = document.createElement('a');
            deleteLink.href = "#";
            deleteLink.key = key;
            var deleteText = "Delete Order";
            //deleteLink.addEventListener("click", deleteItem);
            deleteLink.innerHTML = deleteText;
            linksLi.appendChild(deleteLink);
    }
    
    function editItem(){
        //Grab data from item from local storage
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        
        //Show the form
        toggleControls("off");
        
        //populate form with current local storage values
        $('firstname').value = item.firstname[1];
        $('lastname').value = item.lastname[1];
        $('address').value = item.address[1];
        $('city').value = item.city[1];
        $('select').value = item.state[1];
        $('phnumber').value = item.phnumber[1];
        var radiosCrust = document.forms[0].crust;
        for(var i=0; i<radiosCrust.length; i++){
            if (radiosCrust[i].value == "Deep Dish" && item.crust[1] == "Deep Dish"){
                radiosCrust[i].setAttribute("checked", "checked");
            }else if(radiosCrust[i].value == "Thin Crust" && item.crust[1] == "Thin Crust"){
                radiosCrust[i].setAttribute("checked", "checked");
            }
            if (radiosCrust[i].value == "Stuffed Crust" && item.crust[1] == "Stuffed Crust"){
                radiosCrust[i].setAttribute("checked", "checked");
            }else if(radiosCrust[i].value == "No Crust" && item.crust[1] == "No Crust"){
                radiosCrust[i].setAttribute("checked", "checked");
            }
        }
    
            if(item.xtracheese[1] == "Yes"){
                $('xtracheese').setAttribute("checked", "checked");
            }
            if(item.pepperoni[1] == "Yes"){
                $('pepperoni').setAttribute("checked", "checked");
            }
            if(item.sausage[1] == "Yes"){
                $('sausage').setAttribute("checked", "checked");
            }
            if(item.bacon[1] == "Yes"){
                $('bacon').setAttribute("checked", "checked");
            }
            if(item.onion[1] == "Yes"){
                $('onion').setAttribute("checked", "checked");
            }
            if(item.grnpepper[1] == "Yes"){
                $('grnpepper').setAttribute("checked", "checked");
            }
            if(item.mush[1] == "Yes"){
                $('mush').setAttribute("checked", "checked");
            }
            if(item.bbq[1] == "Yes"){
                $('bbq').setAttribute("checked", "checked");
            }
            if(item.spnch[1] == "Yes"){
                $('spnch').setAttribute("checked", "checked");
            }
            if(item.alfredo[1] == "Yes"){
                $('alfredo').setAttribute("checked", "checked");
            }
            if(item.chkn[1] == "Yes"){
                $('chkn').setAttribute("checked", "checked");
            }
            if(item.bsauce[1] == "Yes"){
                $('bsauce').setAttribute("checked", "checked");
            }
            if(item.rnch[1] == "Yes"){
                $('rnch').setAttribute("checked", "checked");
            }
            if(item.blch[1] == "Yes"){
                $('blch').setAttribute("checked", "checked");
            }
    
        $('qty').value = item.quantity[1];
        var radiosMethod = document.forms[0].method;
        for(var i=0; i<radiosMethod.length; i++){
            if (radiosMethod[i].value == "Pick Up" && item.method[1] == "Pick Up"){
                radiosMethod[i].setAttribute("checked", "checked");
            }else if(radiosMethod[i].value == "Delivery" && item.method[1] == "Delivery"){
                radiosMethod[i].setAttribute("checked", "checked");
            
            }
        }
        $('date').value = item.date[1];
        $('specialInstructions').value = item.instruct[1];
        
        //Remove the initial listener from the input button.
        save.removeEventListener("click", storeData);
        //Change Submit button value to say Edit
        $('submit').value = "Edit Contact";
        var editSubmit = $('submit');
        //Save the key value established in this function as a propery of the editSubmit event
        //so the value can be used when data is saved that was edited
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;

    }
    
    function clearLocal(){
        if (localStorage.length === 0){
            alert("There is no data to clear.")
        }else{
           localStorage.clear();
           alert("Order(s) deleted.");
           window.location.reload();
           return false;
        }
    }
    
     function validate(m){
        //Define elements that need to be validated
        var getFirstName = $('firstname');
        var getLastName = $('lastname')
        var getAddress = $('address');
        var getCity = $('city');
        var getState = $('select');
        var getPhoneNumber = $('phnumber');
        
        //Reset Error Messages
        errMsg.innerHTML = "";
        getFirstName.style.border = "1px solid black";
        getLastName.style.border = "1px solid black";
        getAddress.style.border = "1px solid black";
        getCity.style.border = "1px solid black";
        getState.style.border = "1px solid black";
        getPhoneNumber.style.border = "1px solid black";

        
        //Get error messages
        var messageArray = [];
        //Group validation
        if(getFirstName.value === ""){
            var firstNameError = "Please Enter Your First Name.";
            getFirstName.style.border = "1px dashed red";
            messageArray.push(firstNameError);
        }
        
        if (getLastName.value === ""){
            var lastNameError = "Please Enter Your Last Name.";
            getLastName.style.border = "1px dashed red";
            messageArray.push(lastNameError)
        }
        
        if (getAddress.value === ""){
            var addressError = "Please Enter Your Street Address.";
            getAddress.style.border = "1px dashed red";
            messageArray.push(addressError)
        }
        
        if (getCity.value === ""){
            var cityError = "Please Enter Your City.";
            getCity.style.border = "1px dashed red";
            messageArray.push(cityError);
        }
        
        if (getState.value == "--Choose a State--"){
            var stateError = "Please Provide Your State.";
            getState.style.border = "1px dashed red";
            messageArray.push(stateError);
        }
        //Telephone Validation using regex
       var validTelephone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!(validTelephone.exec(getPhoneNumber.value))){
            var telephoneError = "Please Enter a Valid Telephone Number.";
            getPhoneNumber.style.border = "1px dashed red";
            messageArray.push(telephoneError);
    }
    if(messageArray.length >= 1){
        for(var i=0, j=messageArray.length; i < j; i++){
            var txt = document.createElement('li');
            txt.innerHTML = messageArray[i];
            errMsg.appendChild(txt);
        }
        m.preventDefault();
        return false;
    }else{
        storeData();
    }
}
  
    //Variable defaults
    var orderForm = [
                    "--Choose a State--",
                    "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO",
                    "MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
                    ],
        selectValue,
        crustValue,
        methodValue
        errMsg = $('errors');
    
    makeState();
        
        
   
    
    
    
  //Set link & submit click events
    var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clearLink.addEventListener("click", clearLocal);
    var save = $('submit');
    save.addEventListener("click", validate);
    

    
    
    
    });

