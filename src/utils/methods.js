// THIS METHOD CREATE A DEFAULT RETURN VALUE FOR MODULE REQUESTS
function setDefaultReturn({ status, data, error }) {
	const defaultReturn = {
		status: status,
		data: { ...data },
		error: error
	};

	return defaultReturn;
}

exports.defaultReturn = setDefaultReturn;
