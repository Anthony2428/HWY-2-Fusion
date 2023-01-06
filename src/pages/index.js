import React from 'react';
import Background from '../images/Main.png';
import { PageWrapper, Wrapper } from './pageStyles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
const Home = () => {
    return (
        <PageWrapper>
            <NavBar>
                <Header />
            </NavBar>
            <Wrapper style={{
                backgroundImage: `url(${Background})`, 
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat',
            }}>
            </Wrapper>
            <Footer />
        </PageWrapper>
    )
}
export default Home;