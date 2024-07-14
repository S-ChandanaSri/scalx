import styles from '../styles/Home.module.css';
import Image from 'next/image';
import myImage from '../public/images/pathh.jpg';
import profile from '../public/images/profile.png';
import notifi from '../public/images/notf.jpg';
import shoppi from '../public/images/shoppi.jpg';
import man from '../public/images/coverimg.png'


export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.landingpage}>
       
        <div className={styles.body}>
          <div className={styles.header}>
            <div className={styles.contentt}>
              <div className={styles.actionbtns}>
                <div className={styles.seemorebtn}>
                  <button>LEARN MORE</button>

                </div>
                <p style={{font:"Montserrat",fontWeight:"700",fontSize:"20px",lineHeight:"24.38px",paddingLeft:"11rem",color:"#707070"}}>MACC Essentials has an important role in making supplies and services available to customers and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much we can.</p>
                <h2 style={{font:"poppins",fontWeight:"700",fontSize:"54px",lineHeight:"81px",paddingLeft:"11rem",color:"#3A408C"}}>PROVIDING SERVICES AT YOUR DOOR</h2>
              </div>


            </div>
            <Image src={man}/>

          </div>
          <div className={styles.groupp}></div>
          <div className={styles.promoo}></div>
          <div className={styles.prom}></div>


        </div>
        <div className={styles.vector}>

        </div>
      
      </div>
      <div className={styles.footer}>
         
      </div>

    </div>

  );
}
