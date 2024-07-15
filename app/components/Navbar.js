import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import myImage from '../../public/images/pathh.jpg';
import profile from '../../public/images/profile.png';
import notifi from '../../public/images/notf.jpg';
import shoppi from '../../public/images/shoppi.jpg';
import man from '../../public/images/coverimg.png';
import Link from 'next/link';

const Navbar=()=>{
  return (
    
    <div className={styles.navbar}>
    {/* First Row */}
    <div className={styles.promotionsnap} >
        <Link href='/Allproducts'>
        <p style={{ gridColumn: '13 / 14',border:"2px solid black",paddingLeft:"2.5rem",color:"red",marginTop:"0.5rem" }}>All products</p>

        </Link>
    <p className={styles.return} style={{ gridColumn: '13 / 14' }}>Return</p>
        <p className={styles.help} style={{ gridColumn: '14 / 15' }}>Help</p>
        <p className={styles.register} style={{ gridColumn: '15 / 16' }}>Register / Sign In</p>
    </div>

    {/* Second Row */}
    <p className={styles.macc} >
        Macc <span style={{alignItems: "center", lineHeight: "44.88px", fontSize: "40px", fontStyle: "italic", fontWeight: "400", fontFamily: "Monotype Corsiva" }}>Essentials</span>
    </p>

    {/* Search Box */}
    <div className={styles.search} style={{ gridColumn: '1 / 4', gridRow: '2 / 3' }}>
        <div className={styles.content}>
            <div className={styles.searchimg}>
                <div className={styles.group2}>
                    <Image src={myImage} alt="Description of image" width={22.01} height={22.01} />
                </div>
            </div>
        </div>
    </div>

    {/* Menu Items */}
    <div className={styles.menuitems} style={{ gridColumn: '4 / 16', gridRow: '2 / 3' }}>
        <div className={styles.about}><p style={{ font: "Montserrat", fontWeight: "400", fontSize: "16px", lineHeight: "19.5px" }}>SHOP</p></div>
        <div className={styles.engagment}><p style={{ paddingLeft: "4rem", font: "Montserrat", fontWeight: "400", fontSize: "16px", lineHeight: "19.5px" }}>ESSENTIALS</p></div>
        <div className={styles.engagmentt}><p style={{ font: "Montserrat", fontWeight: "400", fontSize: "16px", lineHeight: "19.5px", paddingLeft: "7rem" }}>BEST SELLERS</p></div>
        <div className={styles.collection}><p style={{ font: "Montserrat", fontWeight: "400", fontSize: "16px", lineHeight: "19.5px", paddingLeft: "4rem" }}>ABOUT US</p></div>
    </div>

    {/* Right Items */}
    <div className={styles.rightitems} style={{ gridColumn: '14 / 16', gridRow: '2 / 3' }}>
        <div className={styles.likeimg}><Image src={notifi} /></div>
        <div className={styles.profile}><Image src={profile} /></div>
        <div className={styles.shoppi}><Image src={shoppi} /></div>
    </div>
</div>

        
        
      
     

  )
}

export default Navbar
