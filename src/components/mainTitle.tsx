import '../assets/styles/maintitle.scss';
import Statistics from './statistics';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import 'react-dropdown/style.css';
import CircularProgress from '@mui/material/CircularProgress';

const MainTitle = () => {
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
        setX(e.clientX - 892);
        setY(e.clientY - 351);
    }
    const mouseOut = () => {
        setX(0);
        setY(0);
    }
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    return (
        <div className="maintitle flex justify-between">
            <div className='title mt-[138px]'>
                <div className='mix__title'>
                    <div className='dropdown flex items-center'>
                        <div>Q1 2022</div>
                        <div></div>
                    </div>
                    <p className='heading heading-top' data-text='Explore Your own planet'>Explore Your own planet</p>
                    <div className='planetMoveArea' onMouseMove={mouseIn} onMouseOut={mouseOut}>

                    </div>
                    <motion.div
                        className="planetMotion"
                        animate={{ x, y }}
                    />
                    <p className='heading heading-bottom' data-text2='metaverse'>In <span>our New</span> metaverse</p>
                    <CircularProgress variant="determinate" value={progress > 50 ? progress-(progress-50)*2 : progress} />
                    <span className='circle__points' style={{display: progress >= 25 && progress <= 75 ? 'block' : 'none'}}></span>
                    <span className='circle__points' style={{display: progress === 50 ? 'block' : 'none'}}></span>
                    <span className='circle__points' style={{display:"none"}}></span>
                    <span className='circle__points'></span>
                </div>
                <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className='stats mt-[138px]'>
                <h3>Roadmap stats</h3>
                <Statistics />
                <hr />
                <Statistics />
                <hr />
                <Statistics />
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
export default MainTitle;