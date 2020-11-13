const mongoError = {
	value: false,
	listenerEvent: function (value) {},
	set value(val) {
		if (typeof val !== "boolean")
			throw new Error(
				"You attempted to assign a non-boolean value to mongoError"
			);

		this.value = val;
		this.listenerEvent(val);
	},
	get value() {
		return this.value;
	},
	registerListener: function (callback) {
		this.listenerEvent = callback;
	},
};

module.exports = {
	mongoError,
};
