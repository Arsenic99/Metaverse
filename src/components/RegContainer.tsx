import { connect } from "react-redux"
import { fetchParticipans } from "../redux/reducers/reducer";
import { ActionType } from "../redux/types/types";
import Registration from "./registraion";

interface stateobj{
    isRegistered: boolean,
    register: any,
    fetchUsers: any,
    wallet: string,
    username: string,
    email: string,
}

const mapStateToProps = (state:stateobj) => {
    return {
        isRegistered: state.isRegistered,
        wallet: state.wallet,
        username: state.username,
        email: state.email,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        register: (name: string, email: string) => {
            dispatch({
                type: ActionType.REGISTER,
                username: name,
                email: email,
            })
        },
        fetchUsers: ()=>{
            dispatch(fetchParticipans());
        }
    }
}

export const RegContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);