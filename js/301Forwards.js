url = window.location.href
whether = String(url).search(/20[0-2][0-9]\/[0-1][1-9]\/[0-3][1-9]/i)
whethersplash = String(url).search(/20[0-2][0-9]\/[0-1][1-9]\/[0-3][1-9]\//i)
whetherindex = String(url).search(/20[0-2][0-9]\/[0-1][1-9]\/[0-3][1-9]\/index.html/i)
console.log("Match /20[0-2][0-9]\/[0-1][1-9]\/[0-3][1-9]/: " + whether)
console.log("Match /20[0-2][0-9]\/[0-1][1-9]\/[0-3][1-9]\//: " + whethersplash)
console.log("Match /20[0-2][0-9]\/[0-1][1-9]\/[0-3][1-9]\/index.html/: " + whetherindex)
if(whether == true | whethersplash == true | whetherindex == true){
    result = String(url).replace(/20[0-2][0-9]\/[0-1][1-9]\/[0-3][1-9]/i,'posts')
    window.location = result
}
