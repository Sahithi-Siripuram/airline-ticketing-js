function moreForm(){
    var passengers = document.querySelector(".noOfPassengers").value;
    for(let i=0; i<passengers; i++){
        var newDiv=document.createElement("div");
        newDiv.className="container";

        var div1=document.createElement("div");
        div1.className="form-group left-form";
        var div2=document.createElement("div");
        div2.className="form-group left-form";
        var div3=document.createElement("div");
        div3.className="form-group left-form";

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
            var genderForm=document.createElement("input");
            genderForm.setAttribute("type","radio");
            genderForm.setAttribute("name",genderValue);
            genderForm.genderValue=j;
            div3.appendChild(genderLabel);
            div3.appendChild(genderForm);
        });

        div1.appendChild(nameLabel);
        div1.appendChild(nameForm);

        div2.appendChild(ageLabel);
        div2.appendChild(ageForm);

        

        newDiv.appendChild(div1);
        newDiv.appendChild(div2);
        newDiv.appendChild(div3);

        document.querySelector(".moreDetails").appendChild(newDiv);
    }
    var newButton=document.createElement("button");
    newButton.innerHTML="Add Details";
    newButton.className="button-center";
    document.querySelector(".moreDetails").appendChild(newButton);
}