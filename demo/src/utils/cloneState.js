import cloneDeep from "lodash/cloneDeep";

export default (state, fn) => fn(cloneDeep(state));