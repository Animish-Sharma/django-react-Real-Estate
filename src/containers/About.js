import React,{useState,useEffect,Fragment} from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import Image from '../assests/images/images.jpg'

const About = () => {
    const [topSeller,setTopSeller] = useState([]);
    const [realtors,setRealtors] = useState([]);

    useEffect(() => {
        axios.defaults.headers={
            'Content-Type':'application/json'
        }
        const getTopSeller = async ()=>{
            try{
                const res = await axios.get({% your backend url %)
                setTopSeller(res.data)
                
            }
            catch(err){
                console.log(err)
            }
        }
        getTopSeller();
    }, [])

    useEffect(() => {
        axios.defaults.headers={
            'Content-Type':'application/json'
        }
        const getRealtors = async ()=>{
            try{
                const res = await axios.get({% your backend url %})
                setRealtors(res.data)
                
            }
            catch(err){
                console.log(err)
            }
        }
        getRealtors();
    }, [])

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];

        realtors.map(realtor => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{realtor.name}</h3>
                    <p className='about__contact'>{realtor.phone}</p>
                    <p className='about__contact'>{realtor.email}</p>
                    <p className='about__about'>{realtor.description}</p>
                </Fragment>
            );
        });

        for (let i = 0; i < realtors.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+1] ? allRealtors[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+2] ? allRealtors[i+2] : null}
                    </div>
                </div>
            );
        }
        return results;
    }
    

    const getTopSeller = () => {
        let result = [];

        topSeller.map(seller => {
            return result.push(
                <Fragment key={seller.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={seller.photo} alt='' />
                    </div>
                    <h3 className='about__topseller'>Top Seller:</h3>
                    <p className='about__realtor'>{seller.name}</p>
                    <p className='about__contact'>{seller.phone}</p>
                    <p className='about__contact'>{seller.email}</p>
                    <p className='about__about'>{seller.description}</p>
                </Fragment>
            );
        });
        console.log(getAllRealtors())
        return result;
        
    }
    
    return (
        <main className="about">
            <Helmet>
                <title>RealEstate || About</title>
                <meta
                name="description"
                content="About US"
                />
            </Helmet>
            <header className="about__header">
                <h1 className="about__heading">
                Real Estate About Us
                </h1>
            </header>

            <section className="about__info">
                <div className="row">
                    <div className="col-3-of-4">
                        <h2 className="about__subheading">We Found Perfect House for You</h2>
                        <p className="about__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget mattis velit. Aenean posuere dui molestie purus iaculis, a commodo lorem rhoncus. Vivamus consectetur sed augue sed elementum. Quisque ante enim, consequat eu justo nec, ornare vulputate lectus. Etiam egestas diam sit amet ante vulputate volutpat. Curabitur fermentum, felis in iaculis varius, purus arcu laoreet tellus, et mollis metus felis vel turpis. Donec ornare venenatis erat, et sollicitudin purus placerat ut. Praesent vitae dapibus augue, quis tincidunt nibh. Aliquam et tortor leo. Ut pharetra magna vitae imperdiet condimentum. Curabitur tincidunt auctor ipsum id lobortis.

Integer neque nunc, tempor in iaculis sed, volutpat non nulla. Proin eget diam mauris. Etiam vitae sem a risus placerat imperdiet vitae id augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat cursus diam quis auctor. Integer sem nisi, dapibus id scelerisque vel, pretium at quam. Nunc lobortis eleifend tellus quis convallis. Duis vulputate dolor ac magna efficitur mattis. Sed elit justo, euismod non augue et, fermentum molestie orci. Maecenas varius ligula eu ex tincidunt fermentum. Duis consequat, quam at cursus rutrum, eros erat lobortis ante, quis iaculis mauris est id orci. Donec mattis risus nulla. Donec ut lacus nec orci vestibulum consequat sed sed libero. In commodo tincidunt nibh, eu maximus nunc.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eu quam quis mauris cursus rhoncus non non tellus. Sed posuere, quam sit amet imperdiet luctus, nisl nibh finibus ex, ut fermentum enim nibh venenatis justo. Cras ipsum risus, accumsan quis dapibus sit amet, bibendum at lacus. Curabitur mauris dui, congue ut augue iaculis, interdum aliquet elit. Integer ut lacus mattis purus accumsan vehicula vel non tortor. Suspendisse ultrices vel justo a iaculis.
                        </p>

                        <div className="about__display">
                            <img src={Image} alt="" className="about__display__image"/>
                        </div>
                        <p className="about__paragraph">
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. In libero justo, fermentum sit amet efficitur vel, rutrum ac dui. Suspendisse potenti. Curabitur eget maximus enim. Vivamus vulputate urna dolor. Integer scelerisque, nunc sed fermentum tristique, arcu felis bibendum urna, vitae dapibus lorem nisi ut ante. Aliquam ultrices ligula aliquet turpis tempor, ultrices pharetra neque convallis. Aliquam enim enim, fringilla at convallis ac, tempor a neque. Duis rutrum magna vel sem vulputate, sed tincidunt nisl imperdiet. Ut ut turpis tincidunt, maximus justo vel, egestas diam. Donec venenatis lorem eget dapibus iaculis. Phasellus cursus tellus in turpis sodales accumsan. Vivamus commodo est eros, vel semper felis interdum sed. Morbi porta velit sed convallis vulputate. In id vestibulum est. Pellentesque sollicitudin, mi eu malesuada efficitur, erat orci blandit lacus, in finibus risus mauris eu mauris.

Sed viverra turpis quis libero posuere gravida. Ut turpis erat, tempor ultrices efficitur sit amet, sollicitudin non erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pretium nunc in ipsum egestas, vitae molestie nibh fermentum. Integer commodo felis elit, at egestas magna rhoncus in. Ut vitae fringilla ligula. Phasellus viverra facilisis eros, sed pellentesque elit porta a. Nam at dapibus metus. Aenean nec ligula id dui consequat tempus ac non ante. Cras nec nunc nec urna pulvinar tempor at molestie ligula. Duis in molestie justo. Proin eu pretium lorem. Nulla vel augue vehicula, imperdiet elit eu, egestas tortor. Etiam eget dignissim nisl. Donec non mattis ex.

Donec accumsan, augue ut dapibus congue, sem orci congue nisi, a mollis elit arcu et nisi. Ut blandit nec nunc et scelerisque. Ut molestie dictum ipsum, eu porta metus. Nulla dignissim metus ac viverra scelerisque. Nunc quis convallis tellus. Aliquam erat volutpat. Nulla ac justo a urna ultricies ultricies ac quis nulla. Aenean commodo gravida tempor. Suspendisse potenti. Pellentesque viverra ullamcorper velit viverra fermentum. Donec quis pretium dolor. Aliquam lobortis libero et est porta, sit amet sagittis ipsum laoreet. Integer rhoncus orci diam, nec malesuada nisl ultricies semper.
                        </p>

                    </div>
                    <div className="col-1-of-4">
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className="about__team">
                <div className="row">
                    <h2 className="about__subheading">Meet our valuable team</h2>
                    {getAllRealtors()}
                </div>
                
            </section>
        </main>
    )
}

export default About
