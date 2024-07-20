let open = document.getElementById('open');
let close = document.getElementById('close');
let links = document.querySelector('.nav-links')

open.onclick = function(){
     close.style.display='block';
     open.style.display='none';
     links.style.display='flex';

}

close.onclick = function(){
     close.style.display='none';
     open.style.display='block';
     links.style.display='none';
     
}
let up = document.getElementById('up');
up.addEventListener('click',()=>{
    window.scrollTo({
      top:0, 
      left:15,
      behavior:"smooth"
    })
 
})