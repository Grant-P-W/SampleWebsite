function navbarMenu(nav) {
	console.log("test")
	if (nav.className === "nav") {
		nav.className += " responsive";
	} else {
		nav.className = "nav";
	}
  }