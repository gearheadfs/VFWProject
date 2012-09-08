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
        var formTag = document.getElementById("states"), //formTag is an array of all the form tags
            selectLi = $('states'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "groups");
        for(var i=0, j=state.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = state[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    //Variable defaults
    var state = ["--Choose a State--",
                 "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO",
                 "MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
                 ];
    chooseState();
    
    
    
 /*   //Set link & submit click events
    var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    displayLink.addEventListener("click", clearlocal);
    var save = $('submit');
    save.addEventListener("click", storeData);
*/
    
    
    
    
    
    
      
    
});

