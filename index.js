function theBeatlesPlay(musicians,instruments){
  var newArray = []
  var counter = musicians.length
  var i = 0
  for (i=0; i<counter; i++) {
   var newString = musicians[i] + " plays " + instruments[i] 
   newArray.push(newString)
  }
  return newArray
  
}

function johnLennonFacts(facts){
  var i = 0
  while (i<facts.length) {
     facts[i] = facts[i] + "!!!"
     i = i + 1
  }
  return facts
}

