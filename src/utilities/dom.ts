export function checkElementOverflow(e: HTMLElement) {
    return e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
};