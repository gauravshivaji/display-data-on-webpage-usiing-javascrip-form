            
            var rIndex,
                table = document.getElementById("table");
            
          
            function checkEmptyInput()
            {
                var isEmpty = false,
                    fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    age = document.getElementById("age").value;
                    dob= document.getElementById("dob").value;
                    email= document.getElementById("email").value;
                    countySel= document.getElementById("countySel").value;
                    stateSel= document.getElementById("stateSel").value;
                    districtSel= document.getElementById("districtSel").value;
                    gender= document.getElementById("gender").value;
                    hobbies= document.getElementById("hobbies").value;
                    education= document.getElementById("education").value;

                if(fname === ""){
                    alert("First Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(lname === ""){
                    alert("Last Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(age === ""){
                    alert("Age Connot Be Empty");
                    isEmpty = true;
                }
                else if(dob === ""){
                    alert("dob Connot Be Empty");
                    isEmpty = true;
                }
                else if(email === ""){
                    alert("email Connot Be Empty");
                    
                    isEmpty = true;
                }

                else if(countySel === ""){
                    alert("countySel Connot Be Empty");
                    
                    isEmpty = true;
                }
                else if(stateSel === ""){
                    alert("stateSel Connot Be Empty");
                    
                    isEmpty = true;
                }
                else if(districtSel === ""){
                    alert("districtSel Connot Be Empty");
                    
                    isEmpty = true;
                }
                else if(gender === ""){
                    alert("gender Connot Be Empty");
                    
                    isEmpty = true;
                }
                else if(hobbies === ""){
                    alert("hobbies Connot Be Empty");
                    
                    isEmpty = true;
                }
                else if(education === ""){
                    alert("educationConnot Be Empty");
                    
                    isEmpty = true;
                }


                return isEmpty;
            }
            
            
            function addHtmlTableRow()
            {
                
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    cell7 = newRow.insertCell(6),
                    cell8 = newRow.insertCell(7),
                    cell9 = newRow.insertCell(8),
                    cell10 = newRow.insertCell(9),
                    cell11 = newRow.insertCell(10),
                    fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    age = document.getElementById("age").value;
                    dob = document.getElementById("dob").value;
                    email = document.getElementById("email").value;
                    countySel = document.getElementById("countySel").value;
                    stateSel = document.getElementById("stateSel").value;
                    districtSel = document.getElementById("districtSel").value;
                    gender= document.getElementById("gender").value;     
                    hobbies= document.getElementById("hobbies").value; 
                    education= document.getElementById("education").value; 
                cell1.innerHTML = fname;
                cell2.innerHTML = lname;
                cell3.innerHTML = age;
                cell4.innerHTML = dob;
                cell5.innerHTML = email;
                cell6.innerHTML = countySel;
                cell7.innerHTML = stateSel;
                cell8.innerHTML = districtSel;
                cell9.innerHTML = gender;
                cell10.innerHTML = hobbies;
                cell11.innerHTML = education;
                selectedRowToInput();
            }
            }
            
         
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                     
                      rIndex = this.rowIndex;
                      document.getElementById("fname").value = this.cells[0].innerHTML;
                      document.getElementById("lname").value = this.cells[1].innerHTML;
                      document.getElementById("age").value = this.cells[2].innerHTML;
                      document.getElementById("dob").value = this.cells[3].innerHTML;
                      document.getElementById("email").value = this.cells[4].innerHTML;
                      document.getElementById("countySel").value = this.cells[5].innerHTML;
                      document.getElementById("stateSel").value = this.cells[6].innerHTML;
                      document.getElementById("districtSel").value = this.cells[7].innerHTML;
                      document.getElementById("gender").value = this.cells[8].innerHTML;
                      document.getElementById("hobbies").value = this.cells[9].innerHTML;
                      document.getElementById("education").value = this.cells[10].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    age = document.getElementById("age").value;
                    dob = document.getElementById("dob").value;
                   email = document.getElementById("email").value;
                   countySel = document.getElementById("countySel").value;
                   stateSel = document.getElementById("stateSel").value;
                   districtSel = document.getElementById("districtSel").value;
                   gender = document.getElementById("gender").value;
                   hobbies = document.getElementById("hobbies").value;
                   education = document.getElementById("education").value;


               if(!checkEmptyInput()){
                table.rows[rIndex].cells[1].innerHTML = fname;
                table.rows[rIndex].cells[2].innerHTML = lname;
                table.rows[rIndex].cells[3].innerHTML = age;
                table.rows[rIndex].cells[4].innerHTML = dob;
                table.rows[rIndex].cells[5].innerHTML = email;
                table.rows[rIndex].cells[6].innerHTML = countySel;
                table.rows[rIndex].cells[7].innerHTML =stateSel;
                table.rows[rIndex].cells[8].innerHTML =districtSel;
                table.rows[rIndex].cells[9].innerHTML =gender;
                table.rows[rIndex].cells[10].innerHTML =hobbies;
                table.rows[rIndex].cells[11].innerHTML =education;
               
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
 
                document.getElementById("fname").value = "";
                document.getElementById("lname").value = "";
                document.getElementById("age").value = "";
                document.getElementById("dob").value = "";
                document.getElementById("email").value = "";
                document.getElementById("countySel").value = "";
                document.getElementById("stateSel").value = "";
                document.getElementById("districtSel").value = "";
                document.getElementById("gender").value = "";
                document.getElementById("hobbies").value = "";
                document.getElementById("education").value = "";
           
            }

      
        //...............................................................................................................................//
        

      
//...............................................................................................................................//



var stateObject = {
    "India": { "Delhi": ["new Delhi", "North Delhi"],
    "Kerala": ["Thiruvananthapuram", "Palakkad"],
    "Goa": ["North Goa", "South Goa"],
    },
    "Australia": {
    "South Australia": ["Dunstan", "Mitchell"],
    "Victoria": ["Altona", "Euroa"]
    }, "Canada": {
    "Alberta": ["Acadia", "Bighorn"],
    "Columbia": ["Washington", ""]
    },
    }
    window.onload = function () {
    var countySel = document.getElementById("countySel"),
    stateSel = document.getElementById("stateSel"),
    districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
    countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
    stateSel.length = 1; // remove all options bar first
    districtSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done 
    for (var state in stateObject[this.value]) {
    stateSel.options[stateSel.options.length] = new Option(state, state);
    }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
    districtSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done 
    var district = stateObject[countySel.value][this.value];
    for (var i = 0; i < district.length; i++) {
    districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
    }
    }
    }