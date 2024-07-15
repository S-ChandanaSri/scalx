import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import myImage from '../../public/images/pathh.jpg';
import profile from '../../public/images/profile.png';
import notifi from '../../public/images/notf.jpg';
import shoppi from '../../public/images/shoppi.jpg';
import man from '../../public/images/coverimg.png';

function ProductDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const axios = require('axios');

    useEffect(() => {
        if (!id) return;

        const url = 'https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL';

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6b657d12c2mshe15590b5318b569p15c9dcjsn8ecb9ff1890b', // Replace with your actual RapidAPI key
                'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        axios.request(url, options)
            .then(response => {
                console.log('API Response:', response.data); // Log the entire response data to see its structure

                // Assuming the products are in response.data.data.products based on the response data structure
                if (response.data && response.data.data && response.data.data.products) {
                    const products = response.data.data.products;
                    const foundProduct = products.find(product => product.asin === id); // Assuming `id` is the correct field
                    if (foundProduct) {
                        setProduct(foundProduct);
                    } else {
                        console.error('Product not found.');
                    }
                } else {
                    console.error('No products found in the response data.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error.response ? error.response.data : error.message);
            });

    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={styles.navbar}>
    {/* First Row */}
    <div className={styles.promotionsnap} >
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

        
        
      
     

            <div style={{display:"flex",paddingTop:"2rem"}}>
                
            <div className='w-[214px]'>
                    <img
                        src={product.product_photo} // Replace with your actual image URL
                        alt="Product Photo"
                        className={`${styles.productImage}`}
                        />
                </div>
                  
                       

                <div className='w-[501px] ml-[20px]'>
    <div className='w-[501px] h-[73px]'>
        <div>
            <p className='font-Poppins text-28 font-extrabold leading-42'>{product.product_title}</p>
        </div>
        <p className='font-Montserrat text-25 font-bold leading-[30.48px] bg-red-700'>{product.product_price}</p>
    </div>
    <div className='w-[500px] h-[396px] mt-[20px]'>
        <p className='w-[500px] h-[17px] font-Montserrat text-[14px] font-normal leading-[19.6px] bg-[#222222]'>
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet,
        </p>
        <div>
        <button  style={{ backgroundColor: '#white' ,paddingLeft:"3rem 10rem"}}>
    DESCRIPTION
</button>

        </div>
        <div>        <button className='w-[500px] h-[45px] bg-[#231F20]'>RETURN POLICY</button>
        </div>
        <div>
        <button className='w-[500px] h-[45px] bg-[#231F20]'>CITIZEN POLICY</button>

        </div>
    </div>
</div>

                  
               
                <div className='w-[1268px] h-[688px] top-[876px] left-[49px]'></div>
            </div>
        </div>
    );
}

export default ProductDetails;
