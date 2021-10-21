const { text } = require("stream/consumers");

function limit(element)
{
    if(parseInt(element.value)>5){
        alert("only 5 passengers are allowed!")
        element.value = "";
    }
}



function moreForm(){
    var passengers = parseInt(document.querySelector(".noOfPassengers").value);
    operation(1,passengers);

    //table header and decleration
    var newTable=document.createElement("table");
    newTable.className="table";
    var headRow=document.createElement("thead");
    var passengerId=document.createElement("td");
    passengerId.innerHTML="Passenger Id";
    var passengerName=document.createElement("td");
    passengerName.innerHTML="Passenger Name";
    var passengerAge=document.createElement("td");
    passengerAge.innerHTML="Passenger Age";
    var passengerGender=document.createElement("td");
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
            var newRow=document.createElement("tr");
            var IdCol=document.createElement("td");
            var NameCol=document.createElement("td");
            var AgeCol=document.createElement("td");
            var GenderCol=document.createElement("td");
    
            //passenger number label
            var headerLabel=document.createElement("label");
            headerLabel.innerHTML="Enter details of passenger "+(i);
            headerLabel.className="login-title";
    
            //name label and input form to be appended into div1
            var nameLabel=document.createElement("label");
            nameLabel.innerHTML="Name";
            var nameForm=document.createElement("input");
            nameForm.setAttribute("type","text");
            nameForm.setAttribute("id","nameid");
            nameForm.className="form-control passenger-name";
    
            //age label and input form to be appended into div2
            var ageLabel=document.createElement("label");
            ageLabel.innerHTML="Age";
            var ageForm=document.createElement("input");
            ageForm.setAttribute("type","number");
            ageForm.setAttribute("id","age");
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
                
                IdCol.innerHTML="PID-"+i; //generate through random function
                NameCol.innerHTML=document.querySelector(".passenger-name").value;
                AgeCol.innerHTML=document.querySelector(".passenger-age").value; 
                GenderCol.innerHTML="Male";

                //passenger name validation
                var pname = document.querySelector(".passenger-name").value;
                var indicator=0;
                if(pname != pname.trim()){
                    alert("please enter Correct name with out spaces");
                    i--;
                    NameCol.innerHTML=document.querySelector(".passenger-name").value;
                    indicator=1;
                }
                var flag = 0;
                for(let j=0;j<pname.length;j++){
                    if(parseInt(pname[j])>=0 && parseInt(pname[j])<=9){
                        flag=1; 
                        break;
                    }    
                    if(pname[j]=="@" || pname[j]=="~" ||pname[j]=="#" || pname[j]=="$" || pname[j]=="^"){
                        flag=1;
                        break;
                    }
                    if(pname[j]=="*" || pname[j]=="(" ||pname[j]==")" || pname[j]=="-" || pname[j]=="_"){
                        flag=1;
                        break;
                    }
                    if(pname[j]=="+" || pname[j]=="=" ||pname[j]=="{" || pname[j]=="}" || pname[j]=="[" ){
                        flag=1;
                        break;
                    }

                }
                if(flag==1 && indicator==0){
                    alert("Symbols/Numbers are not allowed");
                    NameCol.innerHTML=document.querySelector(".passenger-name").value;
                    i--;
                }
                
                //passanger age validation
                // var flag_age=0;
                // var page = document.querySelector(".passenger-age").value; 
                // if(parseInt(page)<=0 || parseInt(page)>100){
                //     flag_age=1;
                // }
                // if(flag_age==1 && flag==0 && indicator ==0){
                //     alert("please enter the vaildate age");
                //     i--;
                // }
                if(i<0){
                    i=0;
                }
                    
                
                
    
                if(i==passengers)
                    display();
                else{
                    newRow.appendChild(IdCol);
                    newRow.appendChild(NameCol);
                    newRow.appendChild(AgeCol);
                    newRow.appendChild(GenderCol);
                    newTable.appendChild(newRow);
                    operation(i+1,passengers)
                }
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