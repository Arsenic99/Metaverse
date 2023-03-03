import { PartListAPI, PartOneAPI } from "../../api/participationlistAPI";
import { Action, ActionType, stateobj } from "../types/types";

const initialState:stateobj = {
    username: '',
    email: '',
    wallet: '',
    participants: [],
    participant: [],
    isRegistered: false,
}

export const RegisterReducer = (state: stateobj = initialState, action: Action): stateobj => {
    switch(action.type){
        case ActionType.SET_WALLET:{
            return {
                ...state,
                wallet: action.wallet,
            }   
        }
        case ActionType.REGISTER:{
            const newUser = {
                id: 0,
                username: action.username,
                email:action.email, 
                address: state.wallet,
            }
            return {
                ...state,
                username: action.username,
                email: action.email,
                participants: [newUser],
                isRegistered: true
            }
        }
        case ActionType.SET_PARTICIPANTS:{
            return{
                ...state,
                participants: [...state.participants, ...action.participants]
            }
        }
        case ActionType.SET_ONE:{
            return{
                ...state,
                participant: action.participant
            }
        }
        case ActionType.DELETE_ONE:{
            state.participants.shift();
            return{
                ...state,
                isRegistered: false
            }
        }
        default: return state;
    }
}

export const fetchParticipans = () => {
    return async (dispatch: any)=>{
        PartListAPI().then((responce)=>{
            try{
                dispatch({
                    type: ActionType.SET_PARTICIPANTS,
                    participants: responce.data.items
                })
            }
            catch(e){
                console.log(e);
            }
        })
    }
}

export const fetchOneParticipant = (id:string) => {
    return async (dispatch: any)=>{
        PartOneAPI(id).then((responce)=>{
            try{
                dispatch({
                    type: ActionType.SET_ONE,
                    participant: responce.data
                })
            }
            catch(e){
                console.log(e);
            }
        })
    }
}


