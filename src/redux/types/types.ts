export enum ActionType {
    REGISTER = 'REGISTER',
    SET_WALLET = 'SET_WALLET',
    SET_PARTICIPANTS = 'SET_PARTICIPANTS',
    SET_ONE = 'SET_ONE',
    DELETE_ONE = 'DELETE_ONE'
}

export interface actionRegister {
    type: ActionType.REGISTER;
    username: string;
    email: string;
}

export interface actionSetWallet {
    type: ActionType.SET_WALLET;
    wallet: string;
}

export interface actionSetPart {
    type: ActionType.SET_PARTICIPANTS;
    participants: any;
}

export interface actionSetOne {
    type: ActionType.SET_ONE;
    participant: any;
}

export interface actionDelete {
    type: ActionType.DELETE_ONE;
}

export type Action = actionRegister | actionSetWallet | actionSetPart | actionSetOne | actionDelete

export interface stateobj {
    username: string;
    email: string;
    wallet: string;
    participants: any;
    participant: any;
    isRegistered: boolean;
}
