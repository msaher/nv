function filterList(list, str) {
    let children = list.children;
    for (let c of children) {
	let text = c.children[0].text;
	if (!text.includes(str))
	    c.style.display = 'none';
	else
	    c.style.display = '';
    }
}

function main() {
    let sbar = document.getElementById('search');
    let list = document.getElementById('list');
    sbar.addEventListener('keyup', () => {
	filterList(list, sbar.value);
    })
}

main()
