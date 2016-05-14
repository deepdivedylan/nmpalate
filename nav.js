function toggleCollapse() {
	var navCollapse = document.getElementById("navbar-collapse");
	var normalizedClassName = " " + navCollapse.className + " ";

	if(normalizedClassName.indexOf(" collapse ") >= 0) {
		navCollapse.className = "navbar-collapse";
	} else {
		navCollapse.className = "collapse navbar-collapse";
	}
}
