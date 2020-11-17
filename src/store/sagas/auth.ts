import { call, spawn, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
//import * as config from '../../config';

import logIn from 'store/sagas/auth/logIn';

import * as actionsAuth from "../actions/auth";


export default function* sagaAuth() {
    yield takeEvery( actionsAuth.name__LOG_IN, logIn );    
}