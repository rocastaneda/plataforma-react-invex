import * as Utils from 'Assets/Utils'

import ClientHttpRequest from "Api/ClientHttpRequest"
import Immutable from 'immutable'
import { createModal } from 'Modules/Modal'
import {isLoading} from "Modules/Loading"

const initialState = Immutable.Map({}).set('Search', new Immutable.List([])).set('Response', new Immutable.Map({})).set('Get', new Immutable.Map({}))

/* Types */
export const ACTION_NEW_RANGE = 'ACTION_NEW_RANGE'

export const ACTION_SEARCH_RANGE = 'ACTION_SEARCH_RANGE'

export const ACTION_GET_RANGE = 'ACTION_GET_RANGE'

export const ACTION_DELETE_RANGE = 'ACTION_DELETE_RANGE'

export const ACTION_UPDATE_RANGE = 'ACTION_UPDATE_RANGE'

/* Reducer */
export default (state = initialState, action) => {

	switch (action.type) {
		case ACTION_NEW_RANGE:
			return state.set('Response', new Immutable.Map(action.Obj))
		case ACTION_SEARCH_RANGE:
			return state.set('Search', new Immutable.List(action.Obj))
		case ACTION_GET_RANGE:
			return state.set('Get', new Immutable.Map(action.Obj))
		case ACTION_DELETE_RANGE:
			return state.set('Response', new Immutable.Map(action.Obj))
		case ACTION_UPDATE_RANGE:
			return state.set('Response', new Immutable.Map(action.Obj))
		default:
			return state;
	}
};

/* Action Creators */

export const addRange = (form) => {

	let data = Object.assign({}, form)
	data.categoria = Utils.getListPropsOmit(data.categoria, ['id', 'tmp'])

	return (dispatch) => {

		dispatch(isLoading(true))

		return new ClientHttpRequest({
			service: 'api/newRange',
			method: "POST",
			data: {...data},
			headers: Object.assign({"Authorization": sessionStorage.access_token, "uid": sessionStorage.uid})
		}).request().then( () => {
			dispatch(isLoading(false))
			dispatch(createModal(Utils.successMessage()))
		}).catch(error => {
			dispatch(isLoading(false))
			dispatch(createModal(Utils.errorMessage(Utils.getMessageResponse(error.response.data))))
			throw error
		})
	}
}

export const searchRange = (form) => {

	Utils.clearNullAndEmpty(form)

	return (dispatch) => {

		dispatch(isLoading(true))

		return new ClientHttpRequest({
			service: Object.keys(form).length == 0 ? 'api/searchRange' : 'api/searchParamRange',
			method: "POST",
			data: {...form},
			headers: Object.assign({"Authorization": sessionStorage.access_token, "uid": sessionStorage.uid})
		}).request().then(response => {
			dispatch({ type: ACTION_SEARCH_RANGE, Obj: response.data})
			dispatch(isLoading(false))
		}).catch(error => {
			dispatch(isLoading(false))
			dispatch(createModal(Utils.errorMessage(Utils.getMessageResponse(error.response.data))))
			throw error
		})
	}
}

export const getRange = (id) => {

	return (dispatch) => {

		dispatch(isLoading(true))

		return new ClientHttpRequest({
			service: 'api/getRange',
			method: "POST",
			data: { id },
			headers: Object.assign({"Authorization": sessionStorage.access_token, "uid": sessionStorage.uid})
		}).request().then(response => {
			dispatch({ type: ACTION_GET_RANGE, Obj: response.data})
			dispatch(isLoading(false))
		}).catch(error => {
			dispatch(isLoading(false))
			dispatch(createModal(Utils.errorMessage(Utils.getMessageResponse(error.response.data))))
			throw error
		})
	}
}

export const deleteRange = (id) => {

	return (dispatch) => {

		dispatch(isLoading(true))

		return new ClientHttpRequest({
			service: 'api/deleteRange',
			method: "POST",
			data: { id },
			headers: Object.assign({"Authorization": sessionStorage.access_token, "uid": sessionStorage.uid})
		}).request().then(response => {
			dispatch({ type: ACTION_DELETE_RANGE, Obj: response.data})
			dispatch(isLoading(false))
		}).catch(error => {
			dispatch(isLoading(false))
			dispatch(createModal(Utils.errorMessage(Utils.getMessageResponse(error.response.data))))
			throw error
		})
	}
}

export const updateRange = (form) => {

	let data = Object.assign({}, form)
	data.categoria = Utils.getListPropsOmit(data.categoria, ['id', 'tmp'])
	data.categoria = Utils.unionArray(data.categoria, data.categoriaRemove)

	return (dispatch) => {

		dispatch(isLoading(true))
		dispatch({ type: ACTION_GET_RANGE, Obj: {} })

		return new ClientHttpRequest({
			service: 'api/updateRange',
			method: "POST",
			data: {...data},
			headers: Object.assign({"Authorization": sessionStorage.access_token, "uid": sessionStorage.uid})
		}).request().then(response => {
			dispatch({ type: ACTION_UPDATE_RANGE, Obj: response.data})
			dispatch(isLoading(false))
			dispatch(createModal(Utils.successMessage()))
		}).catch(error => {
			dispatch(isLoading(false))
			dispatch(createModal(Utils.errorMessage(Utils.getMessageResponse(error.response.data))))
			throw error
		})
	}
}

export const clearRange = () => {
	return (dispatch) => {
		dispatch({ type: ACTION_GET_RANGE, Obj: {} })
		dispatch({ type: ACTION_SEARCH_RANGE, Obj: []})
	}
}
