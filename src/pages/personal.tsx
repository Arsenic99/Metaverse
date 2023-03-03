import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/personal.scss';
import '../assets/styles/maintitle.scss';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
import { motion } from "framer-motion";
import CircularProgress from '@mui/material/CircularProgress';
import 'react-dropdown/style.css';


interface propsobj {
    fetchOne: any;
    data: any;
}

const Personal = (props: propsobj) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, 50);

        return () => {
            clearInterval(timer);
        };
    }, []);
    const mouseIn = (e: any) => {
        setX(e.clientX - 1374);
        setY(e.clientY - 355);
    }
    const mouseOut = () => {
        setX(0);
        setY(0);
    }
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const id = useParams();
    useEffect(() => {
        props.fetchOne(id.id)
    }, [])
    return (

        <div className="maintitle flex justify-between personal">
            <div className='title'>
                <div className='mix__title'>
                    <div className="">
                        <h4>Personal data</h4>
                        <div className="personal__data">
                            <div>Name</div>
                            <div>{props.data.username}</div>
                            <div>Email</div>
                            <div>{props.data.email}</div>
                            <div>Wallet</div>
                            <div>{props.data.address}</div>
                        </div>
                    </div>
                    <div className='planetMoveArea' onMouseMove={mouseIn} onMouseOut={mouseOut}>

                    </div>
                    <motion.div
                        className="planetMotion"
                        animate={{ x, y }}
                    />
                    <CircularProgress variant="determinate" value={progress > 50 ? progress-(progress-50)*2 : progress} />
                    <span className='circle__points' style={{display: progress >= 25 && progress <= 75 ? 'block' : 'none'}}></span>
                    <span className='circle__points' style={{display: progress === 50 ? 'block' : 'none'}}></span>
                    <span className='circle__points' style={{display:"none"}}></span>
                    <span className='circle__points'></span>
                </div>
            </div>

            <div className='ring1 flex justify-center items-center' >
                <div className='ring1__outer2 flex justify-center items-center'>
                    <div className='ring1__outer1'>
                    </div>
                </div>
                <div className='ring1__middle flex justify-center items-center'>
                    <div className='ring1__inner2  flex justify-center items-center'>
                        <div className='ring1__inner1  flex justify-center items-center'>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}
export default Personal;