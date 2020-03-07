// THIS METHOD CREATE A DEFAULT RETURN VALUE FOR MODULE REQUESTS
function setDefaultReturn(status, value, errors = '') {
	const defaultReturn = {
		status: status,
		data: { ...value },
		errors: []
	};

	return defaultReturn;
}

exports.defaultReturn = setDefaultReturn;
