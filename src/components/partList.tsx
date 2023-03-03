import { Link } from 'react-router-dom';
import '../assets/styles/partlist.scss'

const PartList = (props: any) => {
    const deleteUser = () => {
        props.deleteOne();
    }
    return (
        <div className="partlist">
            {
                props.list.participants.length !== 0 &&
                <div>
                    <h4>Participation listing (enable only for participants)</h4>
                    <div className='table'>
                        <div className='table__head'>
                            <div className='table__row flex'>
                                <div>Name</div>
                                <div>Email</div>
                                <div>Wallet</div>
                            </div>
                        </div>
                        <div className='table__body'>
                            {
                                props.list.participants.map((item: any) => (
                                    item.id === 0 ?
                                        <div className='table__row flex' key={item.id}>
                                            <div>{item.username}</div>
                                            <div>{item.email}</div>
                                            <div>{item.address}</div>
                                            <div className='delete' onClick={deleteUser}>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div> 
                                        :
                                        <Link to={'/personal/' + item.id} key={item.id}>
                                            <div className='table__row flex' >
                                                <div>{item.username}</div>
                                                <div>{item.email}</div>
                                                <div>{item.address}</div>
                                            </div>
                                        </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default PartList;