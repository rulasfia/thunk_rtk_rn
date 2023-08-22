import lodash from "lodash";

// returns true only when all actions is not loading
export const createLoadingSelector = (actions) => (state) => {
	return lodash(actions).some((action) =>
		lodash.get(state, `loading.${action}`)
	);
};

// returns the first error messages for actions
// * We assume when any request fails on a page that
//   requires multiple API calls, we shows the first error
export const createErrorMessageSelector = (actions) => (state) => {
	return (
		lodash(actions)
			.map((action) => lodash.get(state, `error.${action}`))
			.compact()
			.first() ?? {}
	);
};
