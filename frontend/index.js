function moreForm(){
    var passengers = document.querySelector(".noOfPassengers").value;
    operation(1,passengers);

    //table header and decleration
    var newTable=document.createElement("TABLE");
    var headRow=document.createElement("thead");
    var passengerId=document.createElement("TD");
    passengerId.innerHTML="Passenger Id";
    var passengerName=document.createElement("TD");
    passengerName.innerHTML="Passenger Name";
    var passengerAge=document.createElement("TD");
    passengerAge.innerHTML="Passenger Age";
    var passengerGender=document.createElement("TD");
    passengerGender.innerHTML="Passenger Gender";
    headRow.appendChild(passengerId);
    headRow.appendChild(passengerName);
    headRow.appendChild(passengerAge);
    headRow.appendChild(passengerGender);
    newTable.appendChild(headRow);
    

    function operation(i,passengers){
        
        if(i<=passengers){
    
            //main div with all contents
            var newDiv=document.createElement("div");
            newDiv.className="container";
    
            //div 1- name div-2 age div-3 gender
            var div1=document.createElement("div");
            div1.className="form-group left-form";
            var div2=document.createElement("div");
            div2.className="form-group left-form";
            var div3=document.createElement("div");
            div3.className="form-group left-form";

            //row to append to table
            var newRow=document.createElement("TR");
            var IdCol=document.createElement("TD");
            var NameCol=document.createElement("TD");
            var AgeCol=document.createElement("TD");
            var GenderCol=document.createElement("TD");
    
            //passenger number label
            var headerLabel=document.createElement("label");
            headerLabel.innerHTML="Enter details of passenger "+(i);
            headerLabel.className="login-title";
    
            //name label and input form to be appended into div1
            var nameLabel=document.createElement("label");
            nameLabel.innerHTML="Name";
            var nameForm=document.createElement("input");
            nameForm.setAttribute("type","text");
            nameForm.className="form-control passenger-name";
    
            //age label and input form to be appended into div2
            var ageLabel=document.createElement("label");
            ageLabel.innerHTML="Age";
            var ageForm=document.createElement("input");
            ageForm.setAttribute("type","number");
            ageForm.setAttribute("min","0");
            ageForm.setAttribute("max","100");
            ageForm.className="form-control passenger-age";
    
            //male female labels and input radio buttons to be appended into div3
            var gender=["Male","Female"];
            gender.forEach((genderValue,j)=>{
                var genderLabel=document.createElement("label");
                genderLabel.innerHTML=genderValue;
                genderLabel.setAttribute("for",genderValue);
                genderLabel.className="passenger-gender";
                var genderForm=document.createElement("input");
                genderForm.setAttribute("type","radio");
                genderForm.setAttribute("name","gender");
                genderForm.setAttribute("id",genderValue);
                genderLabel.className="form-control-radio";
                genderForm.className="form-control-radio";
                div3.appendChild(genderLabel);
                div3.appendChild(genderForm);
            });
    
            //add details or submit button to be added to the main div
            var newButton=document.createElement("button");
            newButton.innerHTML=(i==passengers)?"Submit":"Add Details";
            newButton.className="button-center";
            $(newButton).click(function(){
                IdCol.innerHTML="1"; //generate through random function
                NameCol.innerHTML=document.querySelector(".passenger-name").value;
                AgeCol.innerHTML=document.querySelector(".passenger-age").value; 
                GenderCol.innerHTML="Male";
                newRow.appendChild(IdCol);
                newRow.appendChild(NameCol);
                newRow.appendChild(AgeCol);
                newRow.appendChild(GenderCol);
                newTable.appendChild(newRow);
                if(i==passengers)
                    display();
                else
                    operation(i+1,passengers);
            }); //jquery onclick implementation
            //try writing the same thing with js
    
            div1.appendChild(nameLabel);
            div1.appendChild(nameForm);
    
            div2.appendChild(ageLabel);
            div2.appendChild(ageForm);
    
            newDiv.appendChild(headerLabel);
            newDiv.appendChild(div1);
            newDiv.appendChild(div2);
            newDiv.appendChild(div3);
            newDiv.appendChild(newButton);
    
            document.querySelector(".full-page").innerHTML="";
            document.querySelector(".full-page").appendChild(newDiv);
            
        }
    }
    function display(){
        document.querySelector(".full-page").innerHTML="";
        document.querySelector(".full-page").appendChild(newTable);
    }
}