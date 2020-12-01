const skipToContentEl = document.getElementById('skip-to-content');

export function changeSkipToContentLink(url: string): void {
	(<HTMLAnchorElement>skipToContentEl).href = `${url}#main`;
}
