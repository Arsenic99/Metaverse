import { connect } from "react-redux"
import { ActionType } from "../../redux/types/types"
import Header from "./header"


const mapStateToProps = (state: object) => {
    return {
        wallet: state,
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        setWallet: (wallet:string)=>{
            dispatch({
                type: ActionType.SET_WALLET,
                wallet: wallet
            })
        }
    }
}

export const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header)