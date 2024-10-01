chrome.runtime.onMessage.addListener((msg, _, respond) => {
	if (msg.type === 'get-cookie') {
		respond(document.cookie)
	}
})
