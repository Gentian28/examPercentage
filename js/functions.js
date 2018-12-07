export var tabs = function (tabsList, tabsContentList) {

    var tabs = tabsList[0].children;

    var tabsContent = tabsContentList[0].children;

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('data-tab', 'tab-' + (i + 1) + '');
        tabsContent[i].classList.add('tab-' + (i + 1) + '');
        tabs[i].onclick = function () {
            var tab_class = this.getAttribute('data-tab');
            for (var j = 0; j < tabsContent.length; j++) {
                tabs[j].classList.remove('active');
                tabsContent[j].classList.remove('active');
            }
            this.classList.add('active');
            document.getElementsByClassName(tab_class)[0].classList.add('active');
        }
    }
}

export function showResult() {
    this.children[1].style.display = 'block';
}

export function hideResult() {
    this.parentElement.parentElement.style.display = 'none';
}

export function toggleCardList() {

    let cardListItem = document.querySelectorAll('.cardListItem');
    let closeList = document.querySelectorAll('.closeList');

    for (let i = 0; i < cardListItem.length; i++) {
        cardListItem[i].onclick = function () {
            this.children[1].classList.add('active');
        }
    }

    for (let i = 0; i < closeList.length; i++) {
        closeList[i].onclick = function (e) {
            e.path[2].classList.remove('active');
            e.stopPropagation();
        }
    }

}