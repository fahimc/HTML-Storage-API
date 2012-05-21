var storage = {
	/* @method
	 * @desc The Divider Character
	 * @return String
	 */
	divider : "|",
	/* @method
	 * @desc An event to hand errors. Set this with your event.
	 * @return null
	 */
	errorEvent : null,
	/* @method
	 * @desc check for local storage support
	 * @return Boolean
	 */
	isLocalStorageSupported : function() {
		try {
			var supported = false;
			if(window['localStorage'] !== null) {
				supported = true;
			}
			return supported;
		} catch(e) {
			return false;
		}
	},
	/* @method
	 * @desc Check if a table exists
	 * @return Boolean
	 */
	checkTableExists : function(name) {
		if(localStorage.getItem(name)) {
			return true;
		} else {
			return false;
		}
	},
	/* @method
	 * @desc Create a Table
	 * @return null
	 */
	createTable : function(name) {
		try {
			localStorage.setItem(name, "");
		} catch (e) {
			if(e == QUOTA_EXCEEDED_ERR) {
				if(errorEvent)
					errorEvent(QUOTA_EXCEEDED_ERR);
			}
		}
	},
	/* @method
	 * @desc Removes a table
	 * @return null
	 */
	dropTable : function(name) {
		localStorage.removeItem(name);
	},
	/* @method
	 * @desc Adds data to a table. Use Objects.
	 * @return null
	 */
	addTableData : function(name, data) {
		try {
			localStorage[name] = (localStorage[name] == "" ? "" : localStorage[name] + this.divider) + JSON.stringify(data);
		} catch (e) {
			if(e == QUOTA_EXCEEDED_ERR) {
				if(errorEvent)
					errorEvent(QUOTA_EXCEEDED_ERR);
			}
		}
	},
	/* @method
	 * @desc Removes data to a table. Use Objects.
	 * @return null
	 */
	removeData : function(name, data) {
		localStorage[name] = localStorage[name].replace(this.divider + JSON.stringify(data), "");
	},
	/* @method
	 * @desc Gets all data from a Table. Returns Array of objects
	 * @return Array
	 */
	getTableData : function(name) {
		var arr = localStorage.getItem(name).split(this.divider);
		var list = new Array();
		for(var a = 0; a < arr.length; a++) {
			list.push(JSON.parse(arr[a]));
		}
		arr = null;
		return list;

	},
	/* @method
	 * @desc Clears the local storage.
	 * @return null
	 */
	clearDatabase : function() {
		localStorage.clear();
	}
}