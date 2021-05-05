const courses = [

    {
        name:"Complete ReactJs course" ,
        price:"3.4"
    },
    {
        name:"Complete Mern course" ,
        price:"1.4"
    },
    {
        name:"Complete Angular course" ,
        price:"2.4"
    },
    {
        name:"Complete C++ course" ,
        price:"3.2"
    },
    {
        name:"Complete django course" ,
        price:"6.2"
    },
   

];
 
//loop the course inside function
function generateList()
{  //for ul
    const ul=document.querySelector(".list-group")
  
  
    //its last part to  do 33 line
    ul.innerHTML="";   //here we can not use inner text of html

    courses.forEach((course) => {
    //for li
    const li=document.createElement("li")
    //creat element=<li></li> or<p></p> like that
     li.classList.add("list-group-item")
     

     const name=document.createTextNode(course.name)//grab name
     li.appendChild(name);
     
     const span=document.createElement("span")
     span.classList.add("float-right");
     
     const price= document.createTextNode("$" + course.price)
    span.appendChild(price);

     li.appendChild(span)
     ul.appendChild(li)  

     //class always a list
    // <li class="list-group-item">
    //complete c++ course
    //<spanclass="float-right">$3.8</span>
    //</li>


  })   

}
//generateList();

//its directly show page n info
//but many of case people dont do this ,info
//n page show after its load
//so we have a windo object
window.addEventListener("load",generateList);
// both code are same

//no i want,when i click on sort course
// its sorted by its price

const button= document.querySelector(".sort-btn")

button.addEventListener("click",()=>{

    courses.sort((a,b)=>a.price-b.price)
//sort go ahed and look for every single object
//nothing  happen here on th screen after click 
//so i call method and run

generateList();
//the course are sorted but its repete it

//reason is html already have values
//so comment the <li></li>

});
