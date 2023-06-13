import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-k.png';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';
import CTA from './CTA';

const Home = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    const nameString = 'amlesh';
    const nameArray = [...nameString];
    const jobString = 'web developer';
    const jobArray = [...jobString];

    // const nameArray = ['','a','m', 'l', 'e', 's', 'h',]
    // const jobArray = ['W', 'e', 'b'," ", 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I </span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Frontend Developer / JavaScript Expert</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                <CTA />
            </div>
            <Logo />
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home;