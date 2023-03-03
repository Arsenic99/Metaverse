import { useEffect, useState } from 'react';
import '../assets/styles/registration.scss'

interface propsobj {
    isRegistered: boolean,
    register: any,
    fetchUsers: any,
    wallet: string,
    username: string,
    email: string;
}

const Registration = (props: propsobj) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const submit = () => {
        props.register(name, email);
        props.fetchUsers();
    }
    useEffect(()=>{
        setName(props.username);
        setEmail(props.email);
    },[props.username, props.email])
    return (
        <div className="registration">
            <h4>Beta test registration</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <label htmlFor="name">Name</label>
            {props.isRegistered ? <div>{name}</div> : <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" id="name" placeholder="We will display your name in participation list" required />}
            <label htmlFor="email">Email</label>
            {props.isRegistered ? <div>{email}</div> : <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" id="email" placeholder="We will display your email in participation list " required />}
            <button onClick={submit} disabled={(props.isRegistered || props.wallet === undefined) ? true : false} style={{opacity: props.isRegistered ? 0.5 : 1}}>Get early access</button>
        </div>
    )
}
export default Registration;