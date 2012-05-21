(function(window) {

	function Main() {
		if(window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}

	}

	function onLoad() {

		//storage test
		if(storage.checkTableExists("test")) {
			console.log("TABLE exists");
		} else {
			var d = {
				name : "fahim",
				age : 27
			};
			var p = {
				name : "peter",
				age : 45
			};
			storage.createTable("test");
			storage.addTableData("test", d);
			storage.addTableData("test", p);

		}
		console.log(storage.getTableData("test"));
	}

	Main();
}
)(window);
