function display(content) {
  // if (content){
  //   return 'your message is ' + content
  // } else{
  //   return 'no message'
  // }if (content === null || content === undefined)
  if (content === null || content === undefined){
    return 'no message'
} else {
  return 'your message is ' + content
}
  
}

module.exports = display
