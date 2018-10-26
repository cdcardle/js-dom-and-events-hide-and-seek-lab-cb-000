function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  const allLists = document.querySelectorAll('ranked-list')

  for (let i = 0; i < allLists.length; i++) {
    return allLists[i].innerHTML = (i + n).toString()
  }
}
