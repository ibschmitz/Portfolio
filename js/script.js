openNav = () => {
  document.querySelector('#menubutton').style.display = 'none'
  document.querySelector('#mobilenav').style.display = 'block'
}
closeNav = () => {
  document.querySelector('#mobilenav').style.display = 'none'
  document.querySelector('#menubutton').style.display = 'block'
}
document.querySelector('#menubutton').addEventListener('click', openNav);
document.querySelector('#closebutton').addEventListener('click', closeNav);