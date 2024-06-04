/**************** 
     window 
***************/

// 1) open ,close ,closed => boolean ,  stop

// 2) alert(),print(),propmpt(),comfirm()

// 3) screen => screenLeft ,screenTop

// 4) scroll => scrollX ,scrollY

/**************** 
     window  location 
***************/

//location.href=> return the location
//location.hostname=> return the dominio's name
// localtion.pathname => return the pathname
//location.protocol=> returl protocol
//location.assing => load a new document

/**************** 
  proyect 
***************/
const buy = confirm(
  `the height is : ${window.screen.height} and de width is ${window.screen.width}`
)

buy ? alert('yes') : alert('no')

const { href, pathname, hostname, protocol } = window.location

document.write(
  `protocol : ${protocol} ,pathname : ${pathname} , hostname: ${hostname}, href : ${href}`
)
/**OBJECT SCREEN */
// screen.width => the total width
// screen.height => the total height

// screen.availWidth => The width available
// screen.availHeight => the width available

// screen.pixelDepth => Color resolution
// screen.colorDepth => Bits depth of the color palette
