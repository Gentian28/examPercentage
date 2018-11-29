let headerHeight = header.offsetHeight;
let footerHeight = footer.offsetHeight;

let headerAndFooterHeight = headerHeight + footerHeight + 30;

export function setContentHeight() {
    let contentHeight = content.style.height = 'calc(100% - ' + headerAndFooterHeight + 'px)';

    return contentHeight;
}