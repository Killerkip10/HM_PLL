export const validate = ({ symptoms }) => {
	if (symptoms && !symptoms.find(id => id !== '')) {
		return { _error: 'Please select at least one symptom' };
	}

	return {};
};
