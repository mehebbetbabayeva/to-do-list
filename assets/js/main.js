document.querySelector("#addbtn").addEventListener("click",function(){
  let inputValue = document.querySelector("#addinput").value;
  if(inputValue.trim()==""){
    alert("Please filled the blanks")
  }
  else {
    document.querySelector("#addtask").innerHTML += `
            <div class="addtaskcontent">
                <span>${inputValue}</span>
                 <button id="delete">
                    <i class="fa-solid fa-trash-can"></i>
                 </button>
            </div>
    
    `;


    document.querySelector("#addinput").value="";
    let deleteButton =document.querySelectorAll("#delete");
    for(let i=0;i<deleteButton.length;i++){
        deleteButton[i].onclick=function (){
            this.parentNode.remove();
        }
    };


  };










})