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