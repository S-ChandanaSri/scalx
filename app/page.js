import styles from '../styles/Home.module.css';
import Image from 'next/image';
import myImage from '../public/images/pathh.jpg';
import profile from '../public/images/profile.png';
import notifi from '../public/images/notf.jpg';
import shoppi from '../public/images/shoppi.jpg';
import man from '../public/images/coverimg.png';
import move from '../public/images/move.jpg';
import move2 from '../public/images/move2.jpg';
import  Content from '../public/images/content.png';
import  Content1 from '../public/images/content1.png';
import  producttem from '../public/images/producttem.png';
import arrow from '../public/images/arrow.png';
import feature1 from '../public/images/Feature1.png';
import productimg from '../public/images/productimg.png';
import productimg11 from '../public/images/productimg11.png';
import first1 from '../public/images/first1.png';
import second2 from '../public/images/second2.png';









export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.landingpage}>
       
        <div className={styles.body}>
          <div className={styles.header}>
            <div className={styles.contentt}>
              <div className={styles.actionbtns}>
                <div className={styles.seemorebtn}>
                  <button style={{ width:"126px", height:"30px",backgroundColor:'#E2342D',position:"absolute",top:"646px",left:'124.79px'}}>LEARN MORE</button>

                </div>
                <p className={styles.second} style={{font:"poppins",fontWeight:"600",fontSize:"54px",lineHeight:"81px",color:"#3A408C"}}>PROVIDING SERVICES AT YOUR DOOR</p>
                <p className={styles.first} style={{font:"Montserrat",fontWeight:"700",fontSize:"20px",lineHeight:"24.38px",color:"#707070"}}>MACC Essentials has an important role in making supplies and services available to customers and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much we can.</p>

              </div>


            </div>
            <Image className={styles.imh} src={man}/>

          </div>
          <div className={styles.groupp}>
  <div className="flex justify-between items-center w-full">
    <p className="flex w-[289px] text-4xl font-bold leading-[54px] text-left font-poppins ml-80 pl-80">
     <span className='text-red-700'>NEW</span>  <span className="text-blue-500 pl-6">PRODUCTS</span>
    </p>
    
  </div>

  <div className="flex justify-between items-center row-start-2 col-span-full w-full mt-4">
    <div className="w-16 h-16 center ">
      <Image src={move} />
    </div>
    <div className="flex space-x-4">
      <div className="w-[390px] h-[599px]">
        <div className="w-[390px] h-[537.93px]">
          <div className="w-[320px] h-[320px] bg-gray-200 flex items-center justify-center">
            <Image className="w-[320px] h-[320px]" src={Content} />
          </div>
          <p style={{paddingTop:"1rem",paddingLeft:"5rem"}}>Stay Free Ultra Pad</p>
        </div>
      </div>
      <div className="w-[390px] h-[599px]">
        <div className="w-[390px] h-[537.93px]">
          <div className="w-[320px] h-[320px] bg-gray-200 flex items-center justify-center">
            <Image className="w-[320px] h-[320px]" src={Content1} />
          </div>
          <p style={{paddingTop:"1rem",paddingLeft:"5rem"}}>Body Spray</p>
        </div>
      </div>
      <div className="w-[390px] h-[599px]">
        <div className="w-[390px] h-[537.93px]">
          <div className="w-[320px] h-[320px] bg-gray-200 flex items-center justify-center">
            <Image className="w-[320px] h-[320px]" src={producttem} />
          </div>
          <p style={{paddingTop:"1rem",paddingLeft:"5rem"}}>Face Masks</p>
        </div>
      </div>
    </div>
    <div className="w-16 h-16">
      <Image src={move2} />
    </div>
  </div>
</div>




         
<div className={styles.promoo}>
            <div className={styles.promotion}>
              <div className="flex justify-between items-start">
                <div className="flex-shrink-0">
                  <Image src={feature1} className='w-[569.65px] h-[672.1px] pl-8' />
                </div>
                <div className='flex flex-col ml-8 w-[849px]'>
                  <div className='flex justify-evenly items-center mb-4'>
                    <p className='text-4xl font-bold leading-[54px] font-poppins'><span className='text-red-500'  >MACC</span> WEEKLY DISCOUNT</p>
                    <button className='h-10  border 2px border-solid pl-4 pr-4 bg-gray-200'>
                    VIEW ALL
                    </button>
                  </div>
                  <div className='flex space-x-4'>
                    <div className='w-[380px] bg-gray-200'>
                      <div className='mb-4'>
                        <Image src={productimg11} className='w-full h-[421.38px] pt-4' />
                      </div>
                      <div className='text-center'>
                        <p className='font-bold'>₹ 250</p>
                        <p className='line-through'>₹ 400</p>
                        <p>Stay Free Ultra Pad</p>
                      </div>
                    </div>
                    <div className='w-[420px] bg-gray-200'>
                    <div className='mb-4'>
                        <Image src={productimg} className='w-full h-[441.38px]' />
                      </div>
                      <div className='text-center'>
                        <p className='font-bold'>₹ 400</p>
                        <p className='line-through'>₹ 500</p>
                        <p>Body Spray</p>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.prom}>
          <div className={styles.promotion}>
              <div className="flex justify-between items-start">
                
                <div className='flex flex-col ml-8 w-[849px]'>
                  <div className='flex justify-evenly items-center mb-4'>
                    <p className='text-4xl font-bold leading-[54px] font-poppins'><span className='text-red-500'>MACC</span>  TOP SELLINGS</p>
                    <button className='h-10  border 2px border-solid pl-4 pr-4 bg-gray-200'>
                    VIEW ALL
                    </button>
                  </div>
                  <div className='flex space-x-4'>
                    <div className='w-[380px] bg-gray-200'>
                      <div className='mb-4'>
                        <Image src={productimg11} className='w-full h-[421.38px] pt-4' />
                      </div>
                      <div className='text-center'>
                        <p className='font-bold'>₹ 250</p>
                        <p className='line-through'>₹ 400</p>
                        <p>Stay Free Ultra Pad</p>
                      </div>
                    </div>
                    <div className='w-[420px] bg-gray-200'>
                    <div className='mb-4'>
                        <Image src={first1} className='w-full h-[441.38px]' />
                      </div>
                      <div className='text-center'>
                        <p className='font-bold'>₹ 400</p>
                        <p className='line-through'>₹ 500</p>
                        <p>Body Spray</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="flex-shrink-0 pl-5">
                  <Image src={second2} className='w-[569.65px] h-[672.1px]' />
                </div>
              </div>
            </div>
            
          </div>

          <div className={styles.footer}>
            {/* Footer content here */}
          </div>
        </div>
      </div>
      <div>
    <div className='flex bottom-0 pl-7 pt-12'>
        <div className='flex w-[623.41px] h-[122px] top-[3478.9px] left-[97.58px] gap-0'>
            <p className='w-[195px] h-[122px] top-[3478.9px] left-[97.58px] font-[Monotype_Corsiva] text-[54px] italic leading-[60.59px] text-left'><span style={{color:"red"}}>Macc</span> <span style={{color:"blue"}}>Essentials</span></p>
            <div className='w-[91px] h-[108px] top-[3486.9px] left-[404px] pl-40 pb-10'>
                <div className='w-[82px] h-[22px] top-[3572.9px] left-[404px] '>
                    <p>Products</p>
                </div>
                <div className='w-[91px] h-[22px] top-[3529.9px] left-[404px] pt-6'>
                    <p>Collection</p>
                </div>
                <div className='w-[56px] h-[22px] top-[3486.9px] left-[404px] pt-10'>
                    <p>Collection</p>
                </div>
            </div>


            <div className='w-[72px] h-[103px] top-[3488px] left-[649px] gap-0 opacity-[0px]'></div>
        </div>
        <div className='w-[428px] h-[218.51px] top-[3489px] left-[882px] '>
            <p className='w-[56px] h-[22px] top-[3488px] left-[649px] font-[Montserrat] text-[18px] font-normal leading-[21.94px] text-left'>About</p>
            <p className='w-[72px] h-[17px] top-[3531px] left-[649px] font-[Gotham] text-[18px] font-normal leading-[17.23px] text-left pt-7'>Contact</p>
            <p className='w-[40px] h-[17px] top-[3574px] left-[649px] font-[Gotham] text-[18px] font-normal leading-[17.23px] text-left pt-11'>FAQ</p>
        </div>
        <div style={{paddingRight:"10rem"}}>
            <p className='w-[428px] h-[22px] top-[3489px] left-[882px] font-[Montserrat] text-[18px] font-normal leading-[25.2px] text-left mr-19'>Be the first to know about our biggest and best sales. We'll never send more than one email a month.</p>
            <div className='w-[400.5px] h-[50px] top-[3598px] left-[882px] gap-0 border-[1px] border-[0px] border-[0px] border-[0px] border-[1px] mt-20 border-[solid] border-[#222222]'>
                <p>ENTER YOUR EMAIL</p>
            </div>
            <div className='w-[203px] h-[38.51px] top-[3669px] left-[882px] p-0'>


            </div>
        </div>

    </div>
</div>
    </div>
  );
}