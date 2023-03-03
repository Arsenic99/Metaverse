import { connect } from "react-redux"
import { fetchOneParticipant } from "../redux/reducers/reducer"
import Personal from "./personal"

interface stateobj{
    participant:any;
}

const mapStateToProps = (state:stateobj) => {
    return{
        data: state.participant,
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        fetchOne: (id:string)=>{
            dispatch(fetchOneParticipant(id))
        }
    }
}

export const PersonalContainer = connect(mapStateToProps,mapDispatchToProps)(Personal);