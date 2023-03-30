document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener
  ('submit',(e)=>{
    e.preventDefault()
    newTask(e.target.new_task.value)
    // newTask(e.target.new_task.value)
  })
});

 function newTask(content){
  let ul=document.getElementById('tasks')
  let li=document.createElement('li')
  ul.appendChild(li)
  li.innerHTML=`${ content}`;
  let btn=document.createElement('button');
  btn.addEventListener( 'click',removeToDolist)
  btn.innerHTML= 'X'
  li.appendChild(btn)
 } 
 function removeToDolist(e){ 
  e.target.parentNode.remove()
 }