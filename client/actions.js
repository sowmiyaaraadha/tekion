import { createAction } from 'redux-actions';
import {
  TEKION_DEALER_INFO_REQUEST,
  TEKION_DEALER_INFO_SUCCESS,
  TEKION_DEALER_INFO_FAILURE,
  TEKION_GET_FIXED_OPERATION_REQUEST,
  TEKION_GET_FIXED_OPERATION_SUCCESS,
  TEKION_GET_FIXED_OPERATION_FAILURE,
  TEKION_DEALER_LIST_REQUEST,
  TEKION_DEALER_LIST_SUCCESS,
  TEKION_DEALER_LIST_FAILURE,
  TEKION_UPDATE_DEALER_INFO_REQUEST,
  TEKION_UPDATE_DEALER_INFO_SUCCESS,
  TEKION_UPDATE_DEALER_INFO_FAILURE,
  TEKION_CREATE_DEALER_REQUEST,
  TEKION_CREATE_DEALER_SUCCESS,
  TEKION_CREATE_DEALER_FAILURE,
  TEKION_DEALER_RESET_STATE,
  TEKION_GET_LABORTYPES_FOR_MAKE,
} from './constants';
import Services from './services';

const getDealerInfoRequest = createAction(TEKION_DEALER_INFO_REQUEST);
const getDealerInfoSuccess = createAction(TEKION_DEALER_INFO_SUCCESS);
const getDealerInfoFailure = createAction(TEKION_DEALER_INFO_FAILURE);

const getFixedOperationsRequest = createAction(
  TEKION_GET_FIXED_OPERATION_REQUEST,
);
const getFixedOperationsSuccess = createAction(
  TEKION_GET_FIXED_OPERATION_SUCCESS,
);
const getFixedOperationsFailure = createAction(
  TEKION_GET_FIXED_OPERATION_FAILURE,
);

export const getLaborTypesForMake = createAction(TEKION_GET_LABORTYPES_FOR_MAKE);

const getDealerListRequest = createAction(TEKION_DEALER_LIST_REQUEST);
const getDealerListSuccess = createAction(TEKION_DEALER_LIST_SUCCESS);
const getDealerListFailure = createAction(TEKION_DEALER_LIST_FAILURE);

const updateDealerInfoRequest = createAction(TEKION_UPDATE_DEALER_INFO_REQUEST);
const updateDealerInfoSuccess = createAction(TEKION_UPDATE_DEALER_INFO_SUCCESS);
const updateDealerInfoFailure = createAction(TEKION_UPDATE_DEALER_INFO_FAILURE);

const createDealerRequest = createAction(TEKION_CREATE_DEALER_REQUEST);
const createDealerSuccess = createAction(TEKION_CREATE_DEALER_SUCCESS);
const createDealerFailure = createAction(TEKION_CREATE_DEALER_FAILURE);

export const resetDealerStateWithGivenState = createAction(
  TEKION_DEALER_RESET_STATE,
);

export function getDealerInfo(config) {
  return async (dispatch) => {
    dispatch(getDealerInfoRequest());
    const { error, response } = await Services.getDealerInfo(config);
    if (response) {
      dispatch(getDealerInfoSuccess({ dealerInfo: response.data }));
    }
    if (error) {
      dispatch(getDealerInfoFailure(error));
    }
  };
}

export function getFixedOperationForDealer(config) {
  return async (dispatch) => {
    dispatch(getFixedOperationsRequest());
    const { error, response } = await Services.getFixedOperation(config);
    if (response) {
      dispatch(getFixedOperationsSuccess(response));
    }
    if (error) {
      dispatch(getFixedOperationsFailure(error));
    }
  };
}

export function setDealerInfo(dealerInfo) {
  return async (dispatch) => {
    dispatch(getDealerInfoSuccess({ dealerInfo }));
  };
}

export function setFixedOperationInfo(fixedOperationInfo) {
  return async (dispatch) => {
    dispatch(getFixedOperationsSuccess({ data: fixedOperationInfo }));
  };
}

export function getDealerList(config, payload) {
  return async (dispatch) => {
    dispatch(getDealerListRequest);
    const { error, response } = await Services.getDealerList(config, payload);
    if (response) {
      dispatch(getDealerListSuccess({ dealerList: response.data }));
    }
    if (error) {
      dispatch(getDealerListFailure(error));
    }
  };
}

export function updateDealerInfo(config, payload) {
  return async (dispatch) => {
    dispatch(updateDealerInfoRequest);
    const { error, response } = await Services.updateDealerInfo(
      config,
      payload,
    );
    if (response) {
      dispatch(updateDealerInfoSuccess(response));
    }
    if (error) {
      dispatch(updateDealerInfoFailure(error));
    }
  };
}

export function createNewDealer(config, payload) {
  return async (dispatch) => {
    dispatch(createDealerRequest);
    const { error, response } = await Services.createNewDealer(config, payload);
    if (response) {
      dispatch(createDealerSuccess(response));
    }
    if (error) {
      dispatch(createDealerFailure(error));
    }
  };
}
