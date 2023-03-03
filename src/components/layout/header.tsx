import style from '../../assets/styles/header.module.scss'
import '../../App.css';
import { useEthers } from '@usedapp/core'
import { useEffect } from 'react';

interface propsobj {
    wallet: any,
    setWallet: any,
}

const Header = (props: propsobj) => {

    const ConnectButton = () => {
        const { activateBrowserWallet } = useEthers()
        return <button className={style.button} onClick={() => activateBrowserWallet()}>Connect metamask</button>
    }

    const { account } = useEthers()
    useEffect(() => {
        props.setWallet(account);
    }, [account])
    return (
        <header>
            <div className="mycontainer">
                <div className="flex justify-between mx-auto text-lg leading-[21.5px] items-center">
                    <div className={style.logo}>Logo</div>
                    {account ? <div style={{ color: '#E75626' }}>{account}</div> : <ConnectButton />}
                </div>
            </div>
        </header>
    )
}
export default Header;