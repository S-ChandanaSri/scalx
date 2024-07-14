import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import myImage from '../../public/images/pathh.jpg';
import profile from '../../public/images/profile.png';
import notifi from '../../public/images/notf.jpg';
import shoppi from '../../public/images/shoppi.jpg';
import man from '../../public/images/coverimg.png'

const Navbar=()=>{
  return (
    
        <div className={styles.navbar}>
          <div className={styles.promotionsnap}>
            <p className={styles.return}>Return</p>
            <p className={styles.help}>Help</p>
            <p className={styles.register}>Register / Sign In</p>

            
          </div>
          <p className={styles.macc}>Macc <span style={{alignItems:"center", lineHeight:"44.88px",fontSize:"40px",fontStyle:"italic",fontWeight:"400",fontFamily:"Monotype Corsiva"}}>Essentials</span></p>
          <div className={styles.search}>
          <div className={styles.content}>
          <div className={styles.searchimg}>
          <div className={styles.group2}>
            <Image src={myImage} alt="Description of image"  width={22.01} height={22.01} />
          
          
          </div>
          </div>
          </div>
          </div>

          <div className={styles.menuitems}>
          <div className={styles.about}><p style={{font:"Montserrat",fontWeight:"400", fontSize:"16px",lineHeight:"19.5px"}}>SHOP</p></div>
          <div className={styles.engagment}><p style={{paddingLeft:"4rem", font:"Montserrat",fontWeight:"400",fontSize:"16px",lineHeight:"19.5px",paddingLeft:"4rem"}}>ESSENTIALS</p></div>
          <div className={styles.engagmentt}><p style={{font:"Montserrat",fontWeight:"400",fontSize:"16px",lineHeight:"19.5px",paddingLeft:"11rem"}}>BEST SELLERS</p></div>
          <div className={styles.collection}><p style={{font:"Montserrat",fontWeight:"400",fontSize:"16px",lineHeight:"19.5px",paddingLeft:"4rem"}}>ABOUT US</p></div>
          </div>

          <div className={styles.rightitems}>
          <div className={styles.likeimg}>
         <Image src={notifi} />
          </div>
          <div className={styles.profile}><Image src={profile} /></div>
          <div className={styles.shoppi}><Image src={shoppi} /></div>


          </div>

        </div>
        
        
      
     

  )
}

export default Navbar
