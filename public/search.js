function filterList(str) {
    let list = document.getElementById('list');
    let children = list.children;
    for (let c of children) {
	let text = c.children[0].text;
	if (!text.includes(str))
	    c.classList.add('inactive');
	else
	    c.classList.remove('inactive');
    }
}

function main() {
    let sbar = document.getElementById('search');
    let list = document.getElementById('list');

    sbar.addEventListener('keyup', () => {
	filterList(sbar.value);
    })

     sbar.addEventListener('keydown', (e) => {
 	 if (e.key == 'Enter')
         list.querySelector('li:not(.inactive)').children[0].click();
     })

}

main()
