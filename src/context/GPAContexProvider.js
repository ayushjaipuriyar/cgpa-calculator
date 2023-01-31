import GPAContext from './GPAContext';
const GPAContextProvider = (props) => {
	// const [cartState, dispatchCartAction] = useReducer(
	// );

	// const addItemToCartHandler = (item) => {
	// dispatchCartAction({ type: 'ADD', item: item });
	// };

	// const removeItemFromCartHandler = (id) => {
	// dispatchCartAction({ type: 'REMOVE', id: id });
	// };

	// const cartContext = {
	// items: cartState.items,
	// totalAmount: cartState.totalAmount,
	// addItem: addItemToCartHandler,
	// removeItem: removeItemFromCartHandler,
	// };

	return (
		// <GPAContext.Provider value={cartContext}>
		<GPAContext.Provider >{props.children}</GPAContext.Provider>
	);
};

export default GPAContextProvider;
