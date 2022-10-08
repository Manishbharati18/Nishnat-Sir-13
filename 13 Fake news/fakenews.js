let news = prompt("Enter  News")
let source = prompt("source of this news")

function checkNews() {
  if (news.length == 0 || source.length == 0) {
    alert("Please Enter both the fields")
  } else {
    if (source.toUpperCase() === "TELEGRAM" || source.toUpperCase() === "WHATSAPP" || source.toUpperCase() === "FACEBOOK" || source.toUpperCase() === "FB") {
      alert("You should not to pay attention this type of  news Because it can be fake")
    } else if (source.toUpperCase() === "GOOGLE") {
      alert("You can pay attention this type of news")
    }
  }
}

checkNews();