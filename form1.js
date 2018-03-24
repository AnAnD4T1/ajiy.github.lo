 var i=0;
 var v=0;
 var u=0;
 var n=0;
 var tboxname=[];
 function GetDynamicTextBox(value) {
                     i=i+1;
                     
            return '<input name = "DynamicTextBox" id="dbox'+i+'" type="text" value = "' + value + '" />&nbsp;' +
                    '<input type="button" value="Remove" onclick = "RemoveTextBox(this)" />'
                    
        }
        function GetDynamicpassword(value) {
            i=i+1;
            return '<input name = "DynamicTextBox" id="dbox'+i+'" type="password" value = "' + value + '" />&nbsp;' +
                    '<input type="button" value="Remove" onclick = "RemoveTextBox(this)" />'
        }
        function GetDynamicmail(value) {
            i=i+1;
            return '<input name = "DynamicTextBox" id="dbox'+i+'" type="email" value = "' + value + '" />&nbsp;' +
                    '<input type="button" value="Remove" onclick = "RemoveTextBox(this)" />'
        }
        function GetDynamiccheck(value) {
            i=i+1;
            return '<input name = "DynamicTextBox" id="dbox'+i+'" type="checkbox" value = "' + value + '" />&nbsp;' +
                    '<input type="button" value="Remove" onclick = "RemoveTextBox(this)" />'
        }
        function check(){
            var name= document.getElementById('tbox').value;
           

            if(name == null || name ==""){
                alert("name is required");
                return false;
            }
            else{
                tboxname.push(name);
           console.log("valid");
            v=v+1;
            n=n+1;
            console.log("check");
          //  document.getElementById("f").innerHTML=tboxname[0].value;
            if(document.getElementById('db').value=='text'){
                AddTextBox();
            }
            else if(document.getElementById('db').value=='password'){
                password();
            }
            else if(document.getElementById('db').value=='email'){
                mailid();
            }
            else if(document.getElementById('db').value=='checkbox'){
                checkbox();
            }
        }
        }
        function AddTextBox() {
            var div = document.createElement('DIV');
           // var name = document.getElementById('tbox');
           var name =tboxname[u];
           u=u+1;
            div.innerHTML = name + GetDynamicTextBox("") + "<br /><br />";
            document.getElementById("TextBoxContainer").appendChild(div);
        }
        function password() {
            var div = document.createElement('DIV');
          //  var name = document.getElementById('tbox');
            var name =tboxname[u];
           u=u+1;
            div.innerHTML = name + GetDynamicpassword("") + "<br /><br />";
            document.getElementById("TextBoxContainer").appendChild(div);
        }
        function mailid() {
            var div = document.createElement('DIV');
           // var name = document.getElementById('tbox');
           var name =tboxname[u];
           u=u+1;
            div.innerHTML = name+ GetDynamicmail("") + "<br /><br />";
            document.getElementById("TextBoxContainer").appendChild(div);
        }
        function checkbox() {
            var div = document.createElement('DIV');
          //  var name = document.getElementById('tbox');
          var name =tboxname[u];
           u=u+1;
            div.innerHTML = name + GetDynamiccheck("") + "<br /><br />";
            document.getElementById("TextBoxContainer").appendChild(div);
        }
      

        function RemoveTextBox(div) {
            document.getElementById("TextBoxContainer").removeChild(div.parentNode);
        }

      

        //new
        var inc;
var n1;
function posted(){
      for(inc=1;inc<n+1;inc++){
          postedd(inc);
       }}
  function postedd(inc){

  //if(document.getElementById('db').value=='text'){
   // for(inc=1;inc<n+1;inc++){ 
    var txt=document.getElementById("dbox"+inc).value;
    //inc1=inc1+1;
   // var name = document.getElementById('tbox').value;
   n1=inc-1;
   var name1=tboxname[n1];
   localStorage.setItem(name1,txt);
   // }
  // console.log(name1);
 //  console.log(txt)}

  }

  
  
  
  
//   //table
var inc2=1;
function myTable(){
    console.log(inc2);
    console.log(n);
    for(inc2=0;inc2<n;inc2++){
        console.log("worked loop"); 
        var name2=tboxname[inc2];
        var bvalue=localStorage.getItem(name2)
        ctable(name2,bvalue,inc2);
     }}
//new table

function ctable(name2,bvalue,inc2) {
    console.log("worked dtable");
    var table = document.getElementById("myTable");
    var row = table.insertRow(inc2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name2;
    cell2.innerHTML = bvalue;
}