function moreForm(){
    var passengers = document.querySelector(".noOfPassengers").value;
    operation(1,passengers);
}
function operation(i,passengers){
    if(i<=passengers){
        var newDiv=document.createElement("div");
        newDiv.className="container";

        var div1=document.createElement("div");
        div1.className="form-group left-form";
        var div2=document.createElement("div");
        div2.className="form-group left-form";
        var div3=document.createElement("div");
        div3.className="form-group left-form";

        var headerLabel=document.createElement("label");
        headerLabel.innerHTML="Enter details of passenger "+(i);
        headerLabel.className="login-title";

        var nameLabel=document.createElement("label");
        nameLabel.innerHTML="Name";
        var nameForm=document.createElement("input");
        nameForm.setAttribute("type","text");
        nameForm.className="form-control";

        var ageLabel=document.createElement("label");
        ageLabel.innerHTML="Age";
        var ageForm=document.createElement("input");
        ageForm.setAttribute("type","number");
        ageForm.setAttribute("min","0");
        ageForm.setAttribute("max","100");
        ageForm.className="form-control";

        var gender=["Male","Female"];
        gender.forEach((genderValue,j)=>{
            var genderLabel=document.createElement("label");
            genderLabel.innerHTML=genderValue;
            genderLabel.setAttribute("for",genderValue);
            var genderForm=document.createElement("input");
            genderForm.setAttribute("type","radio");
            genderForm.setAttribute("name","gender");
            genderForm.setAttribute("id",genderValue);
            genderLabel.className="form-control-radio";
            genderForm.className="form-control-radio";
            div3.appendChild(genderLabel);
            div3.appendChild(genderForm);
        });

        var newButton=document.createElement("button");
        newButton.innerHTML=(i==passengers)?"Submit":"Add Details";
        newButton.className="button-center";
        $(newButton).click(function(){operation(i+1,passengers)}); //jquery onclick implementation
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