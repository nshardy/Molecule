/* projectViewController.js
*  Author: Noah Hardy
*  Github: https://github.com/nshardy
*/

function initShowHide () {
  // gets all constants
  const menu = document.getElementById('projectView')
  const menuButton = document.getElementById('hideshowProjectView')
  const container = document.getElementById('container')
  var toggle = localStorage.getItem('isProjectViewShowing')

  // changes the project view on init
  function initToggleView () {
    if ( localStorage.getItem('isProjectViewShowing') === 'false' )
      toggleFalse(menu, menuButton, container)
    else
      toggleTrue(menu, menuButton, container)
  }

  // changes the active theme
  function toggleView () {
    if ( toggle === false )
      toggleFalse(menu, menuButton, container)
    else
      toggleTrue(menu, menuButton, container)
  }

  // onclick function 
  menuButton.addEventListener('click', () => {
    toggle = !toggle
    localStorage.setItem('isProjectViewShowing', toggle)
    toggleView()
  })

  initToggleView()
}

initShowHide()

function toggleTrue(menu, button, container) {
  menu.style.display = 'initial'
  button.innerHTML = '<'
  container.style.gridTemplateAreas = '"titlebar titleBar titleBar titleBar" "sidebar projectView textarea textarea"';
}
function toggleFalse(menu, button, container) {
  menu.style.display = 'none'
  button.innerHTML = '>'
  container.style.gridTemplateAreas = '"titlebar titleBar titleBar titleBar" "sidebar textarea textarea textarea"';
}