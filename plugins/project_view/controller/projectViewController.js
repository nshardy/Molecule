function initShowHide () {
  // gets all constants
  const menu = document.getElementById('projectView')
  const menuButton = document.getElementById('hideshowProjectView')
  var toggle = localStorage.getItem('isProjectViewShowing')

  // changes the project view on init
  function initToggleView () {
    if(localStorage.getItem('isProjectViewShowing') === 'false')
      menu.style.display = 'none'
    else
      menu.style.display = 'initial'
  }

  // changes the active theme
  function toggleView () {
    if(toggle === false)
      menu.style.display = 'none'
    else
      menu.style.display = 'initial'
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
