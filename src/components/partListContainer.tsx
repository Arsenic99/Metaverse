import { connect } from "react-redux"
import { ActionType } from "../redux/types/types"
import PartList from "./partList"

const mapStateToProps = (state:object) => {
    return {
        list: state,
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        deleteOne: ()=>{
            dispatch({
                type: ActionType.DELETE_ONE
            })
        }
    }
}

export const PartListContainer = connect(mapStateToProps,mapDispatchToProps)(PartList);