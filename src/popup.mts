const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
const cookie = await chrome.tabs.sendMessage(tab.id!, { type: 'get-cookie' })

document.body.addEventListener('click', () => {
	;(async () => {
		await navigator.clipboard.writeText(document.body.innerText)
		document.body.dataset.copied = ''
		setTimeout(() => delete document.body.dataset.copied, 500)
	})()
})

document.body.innerText = cookie
