// // const newObject = {
// //     name:'rabeea',
// //     university:'NED university',
// //     depart:'bcit'
// // };
// // window.localStorage.setItem('user',JSON.stringify(newObject));
// // // var get = window.localStorage.getItem('user');
// // // console.log(get);
// // var newGet = JSON.parse(window.localStorage.getItem('user'));
// // console.log(newGet);

// // var num = 10;
// // console.log(num);
// // const newElement = document.createElement('div');
// // newElement.textContent = 'sana fucker';
// // newElement.style.color = 'red';
// // // document.getElementById('only').appendChild(newElement);
// // var body = document.body;
// // body.appendChild(newElement);
// //   const addForm = document.forms['getInfo'];
// //   addForm.addEventListener('submit',storeValue);
// //   function storeValue(event){
// //       event.preventDefault();
// //       var arr = [];
// //       const dev = {};
// //       arr[0] = addForm.querySelector('#name').value;
// //       arr[1] = addForm.querySelector('#city').value;
// //       arr[2] = addForm.querySelector('#cellno').value; 
// //       console.log(arr[0]);
// //       console.log(arr[1]);
// //       console.log(arr[2]);
// //       dev.name = arr[0];
// //       dev.city = arr[1];
// //       dev.cel,lno = Number(arr[2]);
// //       console.log(dev);
      
// //    }
   const getKey = window.localStorage.length;
   for(var i=0;i<getKey;i++){
       const key = localStorage.key(i);
       const item = JSON.parse(window.localStorage.getItem(key));
       create(item);
   }
 
 displayForm = document.getElementById('show-hide');
 addButton = document.querySelector('.contains-addicon');
 addButton.addEventListener('click',function(){
     displayForm.style.display = 'block';
     document.querySelector('.viewsection').style.display = 'none';
 })
 //console.log(addButton);
 devForm = document.forms['devInfo'];
devForm.addEventListener('submit',storeValue);
function storeValue(event){
    event.preventDefault();
    const developer = {};
    developer.name = devForm.querySelector('#devName').value;
    developer.email = devForm.querySelector('#devemail').value;
    developer.lang = devForm.querySelector('#devlang').value;
    developer.desig = devForm.querySelector('#devdesi').value;
    developer.github = devForm.querySelector('#devgit').value;
    developer.linked = devForm.querySelector('#devlink').value;
    console.log(developer);
     window.localStorage.setItem(developer.name,JSON.stringify(developer));
     const get = JSON.parse(window.localStorage.getItem(developer.name));
    console.log(get);
     create(get);
     displayForm.style.display = 'none';
     document.querySelector('.viewsection').style.display = 'block';
}

function create(developer){
    dltBtn = document.createElement('button');
    editBtn = document.createElement('button');
    dltBtn.setAttribute('class',' delet btn btn-primary mx-3');
    editBtn.setAttribute('class','edit btn btn-primary mx-3');
    dltBtn.textContent = 'Delete';
    editBtn.textContent = 'Edit';
    colWidth = document.createElement('div');
    cardContainer = document.createElement('div');
    cardBody = document.createElement('div');
    colWidth.setAttribute('class','col-sm-12 col-md-6 col-lg-4');
    cardContainer.setAttribute('class','card bg-dark');
    cardBody.setAttribute('class','card-body');
    const getValues = Object.values(developer);
    console.log(getValues)
    var divs = [];
    for(var i=0;i<getValues.length;i++){
     divs[i] = document.createElement('div'); 
     divs[i].setAttribute('class','card-element');
     divs[i].textContent = getValues[i];
     cardBody.appendChild(divs[i]);
    }
    cardBody.appendChild(dltBtn);
    cardBody.appendChild(editBtn);
    cardContainer.appendChild(cardBody);
    colWidth.appendChild(cardContainer);
    document.getElementById('cardAttach').appendChild(colWidth);
}
const cardAttach = document.getElementById('cardAttach');
cardAttach.addEventListener('click',removeCard);
function removeCard(event){
    console.log(event);
    //alert('hello');
   // const abc = 'hello';
  if(event.target.className === 'delet'){
     alert('hello');
  }
        
   

}


