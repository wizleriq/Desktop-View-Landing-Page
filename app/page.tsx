import Image from "next/image";
import {
  Warehouse, Star, Instagram, Facebook, Twitter, Bot, Cloud, Circle,
  ShieldCheck, ChartNoAxesCombined, FileLock2
} from 'lucide-react'
import man from '@/pics/man.jpg'
import Man2 from '@/pics/Man2.jpeg'
import picture from '@/pics/picture.png'
import Figma from '@/pics/Figma.png'
import Tensorflowfour from '@/pics/Tensorflowfour.png'
import Webflow from '@/pics/Webflow.png'
import Graph from '@/pics/Graph.png'
import { Target } from 'lucide-react'
import Group from '@/pics/Group.jpeg'
import Hands from '@/pics/Hands.jpeg'
import Beauty from '@/pics/Beauty.jpeg'
import Beauty2 from '@/pics/Beauty2.jpeg'
import iphone from '@/pics/iphone.jpeg'
import { relative } from "path";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fafacebook } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <section className="lg:w-full lg:h-[4830.5px]lg:top-[-126px] lg:left-[-2298px] lg:gap-[0px]">
      <div className=" lg:w-full lg:h-[87px] lg:p-[16px] lg:pr-[100px] lg:pb-[15px] lg:pl-[100px] lg:gap-[0px] lg:flex lg:justify-between lg:items-center">
        <div className="lg:w-[54px] lg:h-[56px] lg:top-[16px] lg:left-[100px] lg:gap-[0px] lg:items-center">
          <Warehouse className="lg:text-[#3498DB] lg:items-center" />
        </div>
        <div className="lg:w-[730px] lg:h-[47px] lg:flex lg:items-center lg:justify-between">
          <ul className="lg:w-[440px] lg:h-[20px] lg:flex lg:justify-between">
            <li className="lg:w-[43px] lg:h-[19px] lg:gap-[0px] lg:text-[#3498DB] lg:text-[16px] lg:font-semibold lg:leading-[19.2px]" style={{ fontFamily: 'Fira Sans' }}>Home</li>
            <li className="lg:w-[66px] lg:h-[19px] lg:gap-[0px] lg:text-[#0B2347] lg:text-[16px] lg:font-medium lg:leading-[19.2px]" style={{ fontFamily: 'Fira Sans' }}>About Us</li>
            <li className="lg:w-[61px] lg:h-[19px] lg:gap-[0px] lg:text-[#0B2347] lg:text-[16px] lg:font-medium lg:leading-[19.2px]" style={{ fontFamily: 'Fira Sans' }}>Service</li>
            <li className="lg:w-[78px] lg:h-[19px] lg:gap-[0px] lg:text-[#0B2347] lg:text-[16px] lg:font-medium lg:leading-[19.2px]" style={{ fontFamily: 'Fira Sans' }}>Contact Us</li>
          </ul>
          <div className="lg:w-[171px] lg:h-[47px] lg:flex lg:items-center lg:justify-center lg:gap-[10px] lg:bg-[#3498DB]">
            <h1 className="lg:w-[51px] lg:h-[19px] lg:gap-[0px] lg:text-[14px] lg:font-normal lg:leading-[19.2px] lg:text-[#ffff]">Hire Us</h1>
          </div>
        </div>
      </div>
      <section className="  lg:w-full lg:h-[4600px] lg:top-[87px] lg:gap-[80px] ">
        {/* <div className="lg:w-full lg:h-[882px] lg:gap-[0px] lg:bg-gray-400"> */}
        <div className="lg:w-full lg:h-[882px] lg:gap-[0px] ">
          {/* <div className="lg:w-full lg:h-[882px] lg:gap-[0px] lg:bg-green-200"> */}
          <div className="lg:w-full lg:h-[744px] lg:gap-[0px] lg:flex">
            <div className="lg:w-[450px] lg:h-[434px] lg:top-[78px] lg:ml-24 lg:left-[100px] lg:mr-4 lg:gap-[58px]">
              <div className="lg:w-[566px] lg:h-[319px] lg:gap-[22px]">
                <div className="lg:w-[566px] lg:h-[123px] lg:gap-[8px]">
                  <div className="lg:w-[375px] lg:h-[19px] lg:gap-[0px]">
                    <h4 className="lg:text-[#2ECC71] lg:text-[15px] lg:font-semibold lg:leading-[19.36px]">WELCOME TO THE FUTURE OF INNOVATIONS</h4>
                  </div>
                  <h2 className="lg:text-[#3498DB] lg:text-[31px] lg:font-medium lg:leading-[48px]">
                    Empowering Businesses with<br /> the Quantum Tech Advantage.
                  </h2>
                </div>
                <h2 className="lg:text-[#0B2347] lg:text-[15px] lg:font-normal lg:leading-[28.8px]">
                At Quantum Tech Innovations, we&apos;re pioneers in pushing <br />
  the boundaries of technology. Our futuristic solutions <br />
  are designed to positively transform your business, bringing <br />
  innovation to the forefront. <br />
  Join us on a journey where possibilities are limitless, and <br />
  the future is now.
                </h2>
              </div>
              <div className="lg:w-[383px] lg:h-[57px] lg:mt-[58px] lg:bg-[#3498DB] lg:flex lg:items-center lg:justify-center">
                <h2 className="lg:text-white lg:text-[16px] lg:font-normal lg:leading-[28.8px] lg:text-left">Explore Our Innovations</h2>
                {/* font-family: Fira Sans;
font-size: 24px;
font-weight: 400;
line-height: 28.8px;
text-align: left; */}

              </div>
            </div>
            <div className="lg:w-[580.69px] lg:h-[653.07px] lg:top-[-46.93px] lg:left-[696px] lg:gap-[58px] ">
              <Image src={man} alt='' width={100} height={100} className="lg:w-[400px] lg:h-[445px] lg:top-[72px] lg:left-[696px] 
             lg:gap-[0px] lg:border-t-[9px] lg:border-[#2ecc70fe] lg:border-r-[9px]  lg:border-b-[9px]  lg:border-l-[9px] lg:object-cover" />
              <div>

                <Image src={picture} alt="" className="lg:w-[543px] lg:h-[298.65] lg:top-[-150px] lg:left-[105px] lg:gap-[0px] lg:relative" />


              </div>

            </div>
          </div>
          <div className=" lg:w-full lg:h-[138px] lg:pt-[33px] lg:pr-[25px] lg:pb-[32.78px]
               lg:pl-[250px] lg:bg-[#ECF0F1] lg:items-center lg:justify-center">
            <div className="lg:w-[800px] lg:h-[72.22px] lg:top-[33px] lg:left-[250px] lg:gap-[112px]
             lg:flex lg:justify-between lg:items-center ">
              {/* <div className="lg:w-[800px] lg:h-[72.22px] lg:top-[33px] lg:left-[250px] lg:gap-[112px]
             lg:flex lg:justify-between lg:items-center lg:bg-orange-300"> */}
              <div className="lg:w-[125px] lg:h-[72.22px] lg:gap-[0px lg:flex flex
               lg:justify-center lg:items-center" style={{ 'fontFamily': 'Fira Sans' }}>
                <div >
                  <Image src={Figma} alt="" className="lg:w-[54px] lg:h-[72.22px]" />
                </div>
                <div className="lg:w-[65px] lg:h-[29px] lg:gap-[0px]">
                  <h2 className="lg:font-bold lg:text-[18px] lg:leading-[28.8px] lg:text-right lg:text-[#959697] ">
                    Figma
                  </h2>
                </div>
              </div>
              <div className="lg:w-[125px] lg:h-[72.22px] lg:gap-[0px lg:flex flex
               lg:justify-center lg:items-center" style={{ 'fontFamily': 'Fira Sans' }}>
                <div>
                  <Image src={Tensorflowfour} alt="" className="lg:w-[100px] lg:h-[72.22px]" />
                </div>
                <div className="lg:w-[65px] lg:h-[29px] lg:gap-[0px]">
                  <h2 className="lg:font-bold lg:text-[18px] lg:leading-[28.8px] lg:text-right lg:text-[#959697] ">
                    Tensorflow
                  </h2>
                </div>
              </div>
              <div className="lg:w-[153px] lg:h-[42px] lg:gap-[0px] lg:flex flex lg:justify-between lg:items-center">
                <div>
                  <Image src={Webflow} alt="" />
                </div>
              </div>
              <div className="lg:w-[125px] lg:h-[72.22px] lg:gap-[0px lg:flex flex
               lg:justify-center lg:items-center" style={{ 'fontFamily': 'Fira Sans' }}>
                <div>
                  <Image src={Graph} alt="" className="lg:w-[70px] lg:h-[60px]" />
                </div>
                <div className="lg:w-[120px] lg:h-[29px] lg:gap-[0px] ">
                  <h2 className="lg:font-bold lg:text-[18px] lg:leading-[28.8px] lg:text-right lg:text-[#959697] ">
                    Power BI
                  </h2>
                </div>
              </div>

            </div>

          </div>
          {/* Section secton starts */}
          <section className="lg:w-[1110px] lg:h-[1471px] lg:top-[78px] lg:ml-24 lg:mr-4l lg:mt-10">
            {/* Parent Container */}
            <div className="lg:w-[1110px] lg:h-[367px]  lg:flex lg:flex-col lg:items-center lg:justify-start">

              {/* Centered Orange Container at the Top */}
              <div className="lg:w-[210px] lg:h-[75px]  lg:flex lg:flex-col lg:items-center lg:justify-center">
                <div className="lg:w-[79px] lg:h-[19px] lg:flex lg:items-center lg:justify-center">
                  <h3 className="lg:text-[16px] lg:font-semibold lg:leading-[19.36px] lg:text-[#2ECC71]" style={{ fontFamily: 'Inter' }}>About Us</h3>
                </div>
                <div className="lg:w-[210px] lg:h-[48px] lg:flex lg:items-center lg:mt-8 lg:justify-center">
                  <h3 className="lg:text-[40px] lg:font-medium lg:leading-[19.36px] lg:text-left lg:text-[#3498DB]" style={{ fontFamily: 'Fira Sans' }}>Who We Are</h3>
                </div>
              </div>

              {/* Blue Container Below Orange Container */}
              <div className="lg:w-[1110px] lg:h-[252px] lg:bg-white lg:mt-8 lg:flex lg:justify-between">
                {/* Content for Blue Container */}
                <div className="lg:w-[352px] lg:h-[252px] lg:bg-white lg:gap-[19px]">
                  <div className="lg:w-[352px] lg:h-[87px] lg:gap-[19px]">
                    {/* icon */}
                    <div className="lg:w-[48px] lg:h-[48px] lg:bg-white lg:pt-[12px] lg:pr-[0px] lg:pb-[0px] lg:pl-[0px]
         lg:border-[2px] lg:gap-[0px] lg:border-[#DAE9FF]">
                      <Target className="lg:w-[24px] lg:h-[24px] lg:top-[12px] lg:left-[12px] lg:gap-[0px] lg:items-center
        lg:justify-center lg:ml-2 lg:text-[#3498DB] " />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="lg:w-[352px] lg:h-[165px] lg:gap-[16px]">
                    <div className="lg:w-[352px] lg:h-[44px]  lg:gap-[0px]">
                      <div className="lg:w-[129px] lg:h-[29px]  lg:gap-[0px]">
                        <h3 className="lg:text-[20px] lg:font-semibold lg:leading-[28.8px] lg:text-left" style={{ fontFamily: 'Fira Sans' }}>Our Mission</h3>
                      </div>
                    </div>
                    <div className="lg:w-[352px] lg:h-[120px]  lg:gap-[0px]">
                      <h2 className="lg-text-[16px] lg:font-normal lg:leading-[20.26px] lg:text-left" style={{ fontFamily: 'Fira Sans' }}>At QuantumTech, our mission is to drive transformative change in the business landscape. We are committed
                        to providing businesses with the technological edge they need to navigate
                        complexities, enhance efficiency, and achieve their strategic objectives.</h2>
                    </div>
                  </div>

                </div>
                {/*content for blue container ends */}

                {/* Content for Blue Container */}
                <div className="lg:w-[352px] lg:h-[252px] lg:bg-white lg:gap-[19px]">
                  <div className="lg:w-[352px] lg:h-[87px] lg:gap-[19px]">
                    {/* icon */}
                    <div className="lg:w-[48px] lg:h-[48px] lg:bg-white lg:pt-[12px] lg:pr-[0px] lg:pb-[0px] lg:pl-[0px]
         lg:border-[2px] lg:gap-[0px] lg:border-[#DAE9FF]">
                      <Target className="lg:w-[24px] lg:h-[24px] lg:top-[12px] lg:left-[12px] lg:gap-[0px] lg:items-center
        lg:justify-center lg:ml-2 lg:text-[#3498DB] " />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="lg:w-[352px] lg:h-[165px] lg:gap-[16px]">
                    <div className="lg:w-[352px] lg:h-[44px]  lg:gap-[0px]">
                      <div className="lg:w-[129px] lg:h-[29px]  lg:gap-[0px]">
                        <h3 className="lg:text-[20px] lg:font-semibold lg:leading-[28.8px] lg:text-left" style={{ fontFamily: 'Fira Sans' }}>Our Mission</h3>
                      </div>
                    </div>
                    <div className="lg:w-[352px] lg:h-[120px]  lg:gap-[0px]">
                      <h2 className="lg-text-[16px] lg:font-normal lg:leading-[20.26px] lg:text-left" style={{ fontFamily: 'Fira Sans' }}>Our vision is to be at the forefront of this evolution, leading businesses
                        into an era of
                        unparalleled innovation, efficiency, and sustainable growth. Our guiding principles
                        are Innovation Beyond Boundaries, Empowering Business Excellence and Sustainability through Technology.</h2>
                    </div>
                  </div>

                </div>
                {/*content for blue container ends */}

                {/* Content for Blue Container */}
                <div className="lg:w-[352px] lg:h-[252px] lg:bg-white lg:gap-[19px]">
                  <div className="lg:w-[352px] lg:h-[87px] lg:gap-[19px]">
                    {/* icon */}
                    <div className="lg:w-[48px] lg:h-[48px] lg:bg-white lg:pt-[12px] lg:pr-[0px] lg:pb-[0px] lg:pl-[0px]
         lg:border-[2px] lg:gap-[0px] lg:border-[#DAE9FF]">
                      <Target className="lg:w-[24px] lg:h-[24px] lg:top-[12px] lg:left-[12px] lg:gap-[0px] lg:items-center
        lg:justify-center lg:ml-2 lg:text-[#3498DB] " />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="lg:w-[352px] lg:h-[165px] lg:gap-[16px]">
                    <div className="lg:w-[352px] lg:h-[44px]  lg:gap-[0px]">
                      <div className="lg:w-[129px] lg:h-[29px]  lg:gap-[0px]">
                        <h3 className="lg:text-[20px] lg:font-semibold lg:leading-[28.8px] lg:text-left" style={{ fontFamily: 'Fira Sans' }}>Our Mission</h3>
                      </div>
                    </div>
                    <div className="lg:w-[352px] lg:h-[120px]  lg:gap-[0px]">
                      <h2 className="lg-text-[16px] lg:font-normal lg:leading-[20.26px] lg:text-left" style={{ fontFamily: 'Fira Sans' }}>Our core values are Innovation, Integrity
                        Collaboration and Customer Success. Your success is our success.We thrive on exploring the uncharted territories of technology, driving
                        innovation in every solution we deliver. We measure our achievements by the impact we create for our clients.</h2>
                    </div>
                  </div>

                </div>

                {/*content for blue container ends */}
              </div>
            </div>
            {/* Image section */}
            <div className="lg:w-[1110px] lg:h-[295px] lg:gap-[24px] lg:mt-5  lg:flex">
              <div className="lg:w-[819px] lg:h-[295px] lg:gap-[0px]">
                <Image src={Group} alt="" className="lg:w-[819px] lg:h-[295px] lg:object-cover lg:items-center" />

              </div>
              <div className="lg:w-[397px] lg:h-[295px] lg:gap-[0px]">
                <Image src={Hands} alt="" className="lg:w-[397px] lg:h-[295px] lg:object-cover lg:items-center" />
              </div>
            </div>
            {/* Image Section Ends */}

            <div className="lg:w-[1110px] lg:h-[769px] lg:gap-[0px] lg:mt-5 lg:bg-white lg:flex">
              <div className="">
                <div className="lg:w-[754px] lg:h-[166px] lg:gap-[19px]">

                  <div className="lg:w-[357px] lg:h-[70px] lg:gap-[8px] ">
                    <div className="lg:w-[157px] lg:h-[21px] lg:gap-[0px] ">
                      <h4 className="lg:text-[16px] lg:font-semibold lg:leading-[19.36px] lg:text-left lg:text-[#2ECC71]">What sets us apart</h4>
                    </div>
                    <div className="lg:w-[370px] lg:h-[43px] lg:gap-[0px] ">
                      <h3 className="lg:text-[34.95px] lg:font-semibold lg:leading-[43.2px] lg:text-left lg:text-[#3498DB]">We are client-inclined</h3>
                    </div>
                    <div className="lg:w-[754px] lg:h-[102px] lg:gap-[0px] ">
                      <h2 className="lg:text-[16px] lg:font-normal  lg:text-left lg:text-[#0B2347]">
                      <p>
  Innovation is not just a goal; it&apos;s our DNA. QuantumTech is driven by a passion for pushing boundaries and 
  exploring the limitless possibilities that technology offers. We believe that true success lies in the success of our clients.
  Our customer-centric approach ensures that every solution we develop is tailored to meet the unique needs 
  and goals of the businesses we serve.
</p>

                      </h2>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[678px] lg:h-[419px]  lg:flex lg:justify-center lg:items-center">
                  <div className="lg:w-[636px] lg:h-[304px] ">
                    <h3 className="lg:text-[30px] lg:font-semibold lg:leading-[37.98px] lg:text-left lg:text-[#0B2347]">My vision for QuantumTech is rooted in the belief that technology has the power to transform not
                      just businesses, but the entire business ecosystem. We&apos;re not just creating solutions; we&apos;re shaping a
                      future where businesses can thrive, innovate, and make a positive impact on the world. Together, let&apos;s
                      pioneer tomorrow&apos;s business landscape.</h3>
                  </div>
                </div>

              </div>
              {/* side starts*/}
              <div className="lg:w-[355px] lg:h-[769px] lg:gap-[57px]">
                <div className="lg:w-[374px] lg:h-[279px] lg:gap-[19px] ">
                  <div className="lg:w-[337px] lg:h-[43px] lg:gap-[0px] ">
                    <h2 className="lg:text-[33px] lg:font-semibold lg:leading-[43.2px] lg:text-left lg:text-[#0B2347]">
                      Know the Team Lead
                    </h2>
                    <div className="lg:w-[355px]  lg:h-[240px] lg:gap-[0px] lg:bg-white">
                      <h2 className="lg:text-[16px] lg:font-normal lg:leading-[20.26px] lg:text-left lg:text-[#0B2347]">
                        With a visionary spirit and a relentless passion for innovation, Alex Mercer founded QuantumTech in [Year]
                        with the mission of revolutionizing the landscape of BusinessTech. Drawing on a background in quantum
                        physics and a keen understanding of business dynamics, Alex envisions a future where technology empowers
                        businesses to reach new heights of success. Beyond the boardroom, Alex is a dedicated advocate for STEM
                        education and believes in nurturing the next generation of innovators.
                      </h2>
                    </div>
                  </div>
                </div>
                {/*Picture*/}

                <div className="lg:w-[355px] lg:h-[397px] lg:top-[336px] lg:gap-[0px] lg:mt-10">
                  <div className="lg:w-[337px] lg:h-[382px] lg:top-[336px] lg:gap-[0px] lg:border">
                    <Image src={Man2} alt='' className="lg:w-[337px] lg:h-[382px]
 lg:top-[336px] lg:gap-[0px] lg:border-t-[9px] lg:border-[#2ecc70fe] lg:border-r-[9px]  lg:border-b-[9px]
               lg:border-l-[9px] lg:object-fill" />
                  </div>
                </div>
                {/*Picture Ends*/}

                {/*Name Starts */}
                <div className="lg:w-[275px] lg:h-[30px] lg:mt-3 lg:flex lg:items-center">
                  <h3 className="lg:text-[24px] lg:font-medium lg:leading-[30.38px] lg:text-left lg:text-[#F7A928]" style={{ fontFamily: 'Fira Sans' }}>
                    Alex Mercer (Founder, QT)
                  </h3>
                </div>

                {/*Name Ends*/}
              </div>

              {/* side ends */}

            </div>
          </section>
          {/* Section secton ends */}

          {/* Third Section (cards section) starts*/}
          <section className="lg:w-[1110px] lg:h-[693px] lg:flex lg:flex-col lg:items-center lg:justify-start 
lg:gap-[40px] lg:mt-10 lg:ml-24 lg:mr-4">
            <div className="lg:w-[213px] lg:h-[60px] lg:flex lg:flex-col lg:items-center lg:justify-center lg:bg-white">
              <div className="lg:w-[120px] lg:h-[19px] lg:flex lg:items-center lg:justify-center">
                <h3 className="lg:text-[16px] lg:font-semibold lg:leading-[19.36px] lg:text-[#2ECC71]" style={{ fontFamily: 'Inter' }}>OUR SERVICES</h3>
              </div>
              <div className="lg:w-[210px] lg:h-[48px] lg:flex lg:items-center lg:mt-2 lg:justify-center">
                <h3 className="lg:text-[40px] lg:font-medium lg:leading-[19.36px] lg:text-left lg:text-[#3498DB]" style={{ fontFamily: 'Fira Sans' }}>What we do</h3>
              </div>
            </div>
            <div className="lg:w-[1110px] lg:h-[578px] lg:flex lg:flex-col  lg:mt-4">
              <div className="lg:w-full lg:flex lg:gap-[24px]">
                {/* Card 1 */}
                <div className="lg:w-[370px] lg:h-[277px] lg:p-[16px] ">
                  <div className="lg:w-full lg:h-[245px] lg:bg-white">
                    <div className="lg:w-[60px] lg:h-[60px]">
                      <Bot className="lg:w-[60px] lg:h-[60px] lg:text-[#2B7FB6]" />
                    </div>
                    <div className="lg:w-full lg:mt-5">
                      <h1 className="lg:font-bold lg:text-[20px] lg:text-left lg:text-[#0B2347]">AI and Machine Learning Integration</h1>
                      <h4 className="lg:font-normal lg:text-[14px] lg:leading-[20.26px] lg:text-left lg:text-[#0B2347] lg:mt-1">
                        Harness the potential of artificial intelligence and machine learning to automate processes, gain valuable insights, and make data-driven decisions.
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Card 1 ends */}


                {/* Card 2 stats */}
                <div className="lg:w-[370px] lg:h-[277px] lg:p-[16px] ">
                  <div className="lg:w-full lg:h-[245px] lg:bg-white">
                    <div className="lg:w-[60px] lg:h-[60px]">
                      <Cloud className="lg:w-[60px] lg:h-[60px] lg:text-[#2B7FB6]" />
                    </div>
                    <div className="lg:w-full lg:mt-5">
                      <h1 className="lg:font-bold lg:text-[20px] lg:text-left lg:text-[#0B2347]">Cloud Computing Solutions</h1>
                      <h4 className="lg:font-normal lg:text-[14px] lg:leading-[20.26px] lg:text-left lg:text-[#0B2347] lg:mt-1">
                        Take your business to new heights with our cloud computing services. We provide scalable and secure solutions on platforms like AWS, ensuring flexibility and reliability for your digital infrastructure.
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Card 2 ends */}

                {/* Card 3 starts */}
                <div className="lg:w-[370px] lg:h-[277px] lg:p-[16px]">
                  <div className="lg:w-full lg:h-[245px] lg:bg-white">
                    <div className="lg:w-[60px] lg:h-[60px]">
                      <Circle className="lg:w-[60px] lg:h-[60px] lg:text-[#2B7FB6]" />
                    </div>
                    <div className="lg:w-full lg:mt-5">
                      <h1 className="lg:font-bold lg:text-[20px] lg:text-left lg:text-[#0B2347]">User Interface (UI) and User Experience (UX) Design</h1>
                      <h4 className="lg:font-normal lg:text-[14px] lg:leading-[20.26px] lg:text-left lg:text-[#0B2347] lg:mt-1">
                        Design that Captivates and Engages: Transform user experiences with our cutting-edge UI/UX design services. From intuitive interfaces to immersive user journeys, we craft designs that captivate, engage, and elevate your brand.
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Card 3 ends */}
              </div>

              {/* Second card section */}
              <div className="lg:w-full lg:flex lg:gap-[24px] lg:mt-0">
                {/* Card 1 */}
                <div className="lg:w-[370px] lg:h-[277px] lg:p-[16px] ">
                  <div className="lg:w-full lg:h-[245px] lg:bg-white">
                    <div className="lg:w-[60px] lg:h-[60px]">
                      <ShieldCheck className="lg:w-[60px] lg:h-[60px] lg:text-[#2B7FB6]" />
                    </div>
                    <div className="lg:w-full lg:h-[138px] lg:gap-[8px] lg:mt-5">
                 
                      <h1 className="lg:font-bold lg:text-[20px] lg:text-left lg:text-[#0B2347]"> Project Management Solutions</h1>
                      <h4 className="lg:font-normal lg:text-[14px] lg:leading-[20.26px] lg:text-left lg:text-[#0B2347] lg:mt-1">
                        Ensure the security of your digital infrastructure with our comprehensive cybersecurity solutions. From threat intelligence to network security, we safeguard your business against evolving cyber threats.
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Card 1 ends */}

                {/* Card 2 stats */}
                <div className="lg:w-[370px] lg:h-[277px] lg:p-[16px]">
                  <div className="lg:w-full lg:h-[245px] lg:bg-white">
                    <div className="lg:w-[60px] lg:h-[60px]">
                      <ChartNoAxesCombined className="lg:w-[60px] lg:h-[60px] lg:text-[#2B7FB6]" />
                    </div>
                    <div className="lg:w-full lg:mt-5">
                      <h1 className="lg:font-bold lg:text-[20px] lg:text-left lg:text-[#0B2347]">Data Analytics and Business Intelligence</h1>
                      <h4 className="lg:font-normal lg:text-[14px] lg:leading-[20.26px] lg:text-left lg:text-[#0B2347] lg:mt-1">
                        Unlock the power of data with our advanced analytics and business intelligence services. Visualize data, gain actionable insights, and make informed decisions that drive business growth.
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Card 2 ends */}

                {/* Card 3 starts */}
                <div className="lg:w-[370px] lg:h-[277px] lg:p-[16px] ">
                  <div className="lg:w-full lg:h-[245px] lg:bg-white">
                    <div className="lg:w-[60px] lg:h-[60px]">
                      <FileLock2 className="lg:w-[60px] lg:h-[60px] lg:text-[#2B7FB6]" />
                    </div>
                    <div className="lg:w-full lg:mt-5">
                      <h1 className="lg:font-bold lg:text-[20px] lg:text-left lg:text-[#0B2347]">Cybersecurity Solutions</h1>
                      <h4 className="lg:font-normal lg:text-[14px] lg:leading-[20.26px] lg:text-left lg:text-[#0B2347] lg:mt-1">
                        Ensure the security of your digital infrastructure with our comprehensive cybersecurity solutions. From threat intelligence to network security, we safeguard your business against evolving cyber threats.
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Card 3 ends */}
              </div>
              {/* Second card section ends */}
            </div>
          </section>

          {/* Third section  ends */}
          {/* Fourth section  starts*/}
          <section className="lg:w-[1110px] lg:h-[560px] lg:flex lg:flex-col lg:items-center lg:justify-start 
lg:gap-[40px] lg:mt-10 lg:ml-24 lg:mr-4 lg:bg-[#D6EAF8]">
            <div className=" lg:mt-8 lg:w-[380px] lg:h-[75px] lg:top-[40px] lg:left-[530.3px] lg:gap-[8px] 
  lg:flex lg:flex-col lg:items-center lg:justify-center">

              <div className="lg:w-[127px] lg:h-[19px] lg:gap-[0px] lg:flex lg:items-center lg:justify-center">
                <h3 className="lg:text-[16px] lg:font-semibold lg:leading-[19.36px]
       lg:text-[#2ECC71]" style={{ fontFamily: 'Inter' }}>TESTIMONIALS</h3>
              </div>
              <div className="lg:w-[380px] lg:h-[48px] lg:gap-[0px] lg:flex lg:items-center lg:mt-2 lg:justify-center">

                <h3 className="lg:text-[40px] lg:font-medium lg:leading-[19.36px] lg:text-left
       lg:text-[#3498DB]" style={{ fontFamily: 'Fira Sans' }}>What our client&apos;s Say</h3>
              </div>
            </div>

            {/*card section starts*/}
            <div className="lg:w-[900px] lg:h-[370px] lg:gap-[0px] lg:mt-[-10px] lg:bg-[#D6EAF8] lg:flex lg:justify-between">

              {/* First card starts */}
              <div className="lg:w-[425px] lg:h-[370px] lg:bg-[#D6EAF8] lg:flex lg:flex-col lg:relative">
                <div className="lg:z-10 lg:w-[425px] lg:h-[300px] lg:mt-auto  lg:bg-[#fff] ">
                  {/* star section */}
                  <div className="lg:flex">
                    <div className="lg:w-[236px] lg:h-[79px] lg:top-[-40px] lg:right-[0px] lg:gap-[0px] lg:bg-[#0B2347] lg:relative lg:rounded-tr-[50px]">
                      <div className="lg:w-[140px] lg:h-[20px] lg:top-[14px] lg:left-[33px] lg:gap-[0px]
       lg:flex lg:flex-col lg:relative">
                        <h3 className="lg:text-white lg:text-[16px] lg:font-normal lg:leading-[20.26px] lg:text-left"
                          style={{ fontFamily: 'Fira Sans' }}>
                          IBT REAL ESTATE
                        </h3>
                        <p className="lg:font-normal lg:text-[14px] lg:leading-[12.66px] lg:text-left lg:mt-3 lg:text-white 
        lg:w-[59px] lg:h-[20px] lg:top-[40px] lg:left-[33px] lg:gap-[0px] " style={{ fontFamily: 'Fira Sans' }}>
                          Review</p>
                        <div className="lg:w-[82.93px] lg:h-[14.27px] lg:gap-[2px] lg:text-white lg:flex 
          lg:justify-end lg:ml-[110px] lg:items-center ">
                          <Star className="text-[#FCD635]" />
                          <Star className="text-[#FCD635]" />
                          <Star className="text-[#FCD635]" />
                          <Star className="text-[#FCD635]" />
                          <Star className="text-[#FCD635]" />
                        </div>

                      </div>
                    </div>
                    {/* star section ends */}
                    <Image src={Beauty} alt="" className="lg:relative lg:top-[-55px] lg:w-[100px] lg:h-[100px] lg:left-[89.4px] lg:gap-[0px] 
      lg:rounded-full lg:border-[8px] lg:border-white lg:object-cover" />
                  </div>

                  {/* Sophia Starts */}
                  <div className="lg:w-[160px] lg:h-[45px] lg:top-[74px] lg:items-center lg:flex lg:flex-col 
     lg:left-[172px] lg:mt-[-40px] lg:gap-[0px] lg:mx-auto">
                    <h2 className="lg:text-[20px] lg:font-bold lg:leading-[25.3px] lg:text-left"
                      style={{ fontFamily: "Fira Sans" }}>Sophia Rodriguez</h2>
                    <p className="lg:text-[16px] lg:font-semibold  lg:leading-[20.26px] lg:text-[#0B2347] lg:text-left"
                      style={{ fontFamily: "Fira Sans" }}>Realtor</p>

                    {/* </div> */}


                  </div>
                  {/* Sophia Ends */}

                  <div className="lg:px-5 lg:mt-5 lg:w-[425px] lg:h-[125px] lg:top-[135px] lg:left-[22px] lg:gap-[0px]">
                    <h3 className="lg:text-[20px] lg:font-normal  lg:leading-[25.32px] lg:text-[#113349] lg:text-left"
                      style={{ fontFamily: "Fira Sans" }}>QuantumTech&apos;s solutions have revolutionized the way we conduct business. The increase in operational efficiency
                      has allowed us to focus more on strategic initiatives, ultimately contributing to our business growth</h3>


                  </div>

                </div>
              </div>
              {/* First card ends */}

              {/* Second card starts */}
              <div className="lg:w-[425px] lg:h-[370px] lg:bg-[#D6EAF8] lg:flex lg:flex-col lg:relative">
                <div className="lg:z-10 lg:w-[425px] lg:h-[300px] lg:mt-auto  lg:bg-[#fff] ">
                  {/* star section */}
                  <div className="lg:flex">
                    <div className="lg:w-[236px] lg:h-[79px] lg:top-[-40px] lg:right-[0px] lg:gap-[0px] lg:bg-[#0B2347] lg:relative lg:rounded-tr-[50px]">
                      <div className="lg:w-[140px] lg:h-[20px] lg:top-[14px] lg:left-[33px] lg:gap-[0px]
       lg:flex lg:flex-col lg:relative">
                        <h3 className="lg:text-white lg:text-[16px] lg:font-normal lg:leading-[20.26px] lg:text-left"
                          style={{ fontFamily: 'Fira Sans' }}>
                          IBT REAL ESTATE
                        </h3>
                        <p className="lg:font-normal lg:text-[14px] lg:leading-[12.66px] lg:text-left lg:mt-3 lg:text-white 
        lg:w-[59px] lg:h-[20px] lg:top-[40px] lg:left-[33px] lg:gap-[0px] " style={{ fontFamily: 'Fira Sans' }}>
                          Review</p>
                        <div className="lg:w-[82.93px] lg:h-[14.27px] lg:gap-[2px] lg:text-white lg:flex 
          lg:justify-end lg:ml-[110px] lg:items-center ">
                          <Star className="text-[#FCD635]" />
                          <Star className="text-[#FCD635]" />
                          <Star className="text-[#FCD635]" />
                          <Star className="text-[#FCD635]" />
                          <Star className="text-[#FCD635]" />
                        </div>

                      </div>
                    </div>
                    {/* star section ends */}
                    <Image src={Beauty2} alt="" className="lg:relative lg:top-[-55px] lg:w-[100px] lg:h-[100px] lg:left-[89.4px] lg:gap-[0px] 
      lg:rounded-full lg:border-[8px] lg:border-white lg:object-cover" />
                  </div>

                  {/* Sophia Starts */}
                  <div className="lg:w-[122px] lg:h-[45px] lg:top-[74px] lg:items-center lg:flex lg:flex-col 
     lg:left-[172px] lg:mt-[-40px] lg:gap-[0px] lg:mx-auto">
                    <h2 className="lg:text-[20px] lg:font-bold lg:leading-[25.3px] lg:text-left"
                      style={{ fontFamily: "Fira Sans" }}>Jayce Roque</h2>
                    <p className="lg:text-[16px] lg:font-semibold  lg:leading-[20.26px] lg:text-[#0B2347] lg:text-left"
                      style={{ fontFamily: "Fira Sans" }}>Creative Director</p>

                    {/* </div> */}


                  </div>
                  {/* Sophia Ends */}

                  <div className="lg:px-5 lg:mt-5 lg:w-[425px] lg:h-[150px] lg:top-[135px] lg:left-[22px] lg:gap-[0px] ">
                    <h3 className="lg:text-[20px] lg:font-normal  lg:leading-[25.32px] lg:text-[#113349] lg:text-left"
                      style={{ fontFamily: "Fira Sans" }}>In our pursuit of digital transformation, QuantumTech has been a key partner.
                      Their innovative BusinessTech solutions have not only met but exceeded our expectations, providing
                      the technological edge needed in today&apos;s competitive business landscape</h3>


                  </div>

                </div>
              </div>
              {/* Second card ends */}

            </div>

          </section>
          {/* Fourth  section ends */}

          {/* Fifth section starts*/}
          <section className="lg:w-[1110px] lg:h-[468px] lg:flex lg:flex-col lg:items-center lg:justify-start 
lg:gap-[40px] lg:mt-14 lg:ml-24 lg:mr-4 ">
            <div className="lg:w-full lg:h-[404px] lg:gap-[0px]">
              {/* Card section starts*/}
              <div className="lg:flex lg:justify-between">
                <div className="lg:w-[566px] lg:h-[387px] lg:top-[4015px] lg:left-[100px] lg:gap-[40px]  lg:flex lg:flex-col lg:justify-between">
                  <div className="lg:w-[566px] lg:h-[123px] lg:gap-[8px] ">
                    <div className="lg:w-[249px] lg:h-[19px] lg:gap-[0px] lg:mb-2">
                      <h4 className="lg:text-[16px] lg:font-semibold lg:leading-[19.36px] lg:text-[#2ECC71] lg:text-left" style={{ fontFamily: "Inter" }}>
                        LET&apos;S SHAPE YOUR BUSINESS
                      </h4>
                    </div>
                    <div className="lg:w-[566px] lg:h-[96px] lg:gap-[0px] lg:bg-[#fff]">
                      <h1 className="lg:text-[40px] lg:font-medium lg:leading-[48px] lg:text-[#3498DB] lg:text-left">
                        Ready to Transform Your Business with QuantumTech?
                      </h1>
                    </div>
                  </div>

                  <div className="lg:w-[540px] lg:h-[145px] lg:gap-[0px]">
                    <h1 className="lg:text-[24px] lg:font-normal lg:leading-[28.8px] lg:text-[#0B2347] lg:text-left">
                      At QuantumTech, we&apos;re not just providing solutions; we&apos;re pioneering a new era of possibilities for your business. Embrace the future of technology, where innovation meets excellence.
                    </h1>
                  </div>

                  <button className="lg:w-[246px] lg:h-[57px] lg:gap-[10px] lg:bg-[#3498DB] lg:flex
   lg:justify-center lg:items-center">
                    <h3 className="lg:text-[16px] lg:font-normal lg:leading-[28.8px] lg:text-[#FFFFFF] lg:text-left"
                      style={{ fontFamily: "Inter" }}>
                      Start a deal
                    </h3>
                  </button>
                </div>

                <div className="lg:w-[492px] lg:h-[404px]  lg:flex lg:items-end lg:justify-start">
                  <div className="lg:w-[225px] lg:h-[205px] lg:bg-[#3498DB] lg:absolute"> </div>
                  {/* Image */}
                  <div className="lg:w-[390px] lg:h-[350px] lg:top-[-20px] lg:left-[100px] lg:gap-[0px] 
  lg:flex lg:items-end lg:justify-start lg:relative ">
                    <Image src={iphone} alt="" className="lg:h-[350px] lg:object-cover lg:border-t-[9px] lg:border-[#2ecc70fe]
   lg:border-r-[9px]  lg:border-b-[9px]
               lg:border-l-[9px]" />

                  </div>
                </div>




              </div>

              {/* Card section ends */}
            </div>

          </section>
          {/* Fifth section ends */}

          {/* Sixth section starts*/}
          <section className="lg:w-[1110px] lg:h-[480px] lg:flex lg:flex-col lg:items-center lg:justify-start lg:gap-[0px]
lg:mt-1 lg:ml-24 lg:mr-4 lg:absolute">
            <div className=" lg:z-10 lg:w-[1000px] lg:h-[170px] lg:pt-[30px] lg:pr-[46px] lg:pb-[29px] lg:pl-[47px] lg:flex 
  lg:flex-col lg:items-center lg:justify-center lg:gap-[0px] lg:bg-[#3498DB] lg:relative lg:top-[-0px]">
              <div className="lg:w-[920px] lg:h-[142px] lg:gap-[21px] ">
                <div className="lg:w-full lg:h-[142px] lg:gap-[8px] lg:flex">
                  <div className="lg:w-[520px]">
                    <div className="lg:w-[480px] lg:h-[86px] ">
                      <h3 className="lg:text-[36px] lg:font-semibold lg:leading-[43.2px] lg:text-[#F2F2F2] lg:text-left" style={{ fontFamily: "Fira Sans" }}>
                        Subscribe to QuantumTech Newsletter
                      </h3>
                    </div>
                    <div className="lg:w-[480px] lg:h-[48px]">
                      <h1 className="lg:text-[20px] lg:font-normal lg:leading-[24px] lg:text-[#FFFFFF] lg:text-left" style={{ fontFamily: "Fira Sans" }}>
                        Stay Ahead with the Latest in Technology,Innovation and tips to grow your business
                      </h1>
                    </div>
                  </div>

                  <div className="lg:w-[430px] lg:h-[60px] lg:bg-green-500 lg:flex lg:items-center lg:relative
         lg:my-auto lg:mx-auto">
                    <div className="lg:w-[460px] lg:h-full lg:flex lg:items-center lg:bg-red-400 lg:relative lg:m">
                      <input type="text" placeholder="Enter Email" className="lg:font-normal lg:leading-[19.2px] lg:text-left lg:text-red-400
     lg:w-full lg:h-full lg:pl-[10px] lg:box-border "  />
                      <button className="lg:mt-[5px] lg:mr-[5px] lg:w-[130px] lg:my-auto lg:mx-auto lg:h-[50px] lg:bg-[#3498DB] lg:text-white lg:absolute lg:right-0 lg:top-0 lg:flex lg:justify-center lg:items-center">
                        <h4 className="lg:text-[16px]">Subscribe</h4>
                      </button>
                    </div>
                  </div>


                  {/* form ends */}

                </div>
              </div>
            </div>


          </section>
          <section className="lg:w-[1110px] lg:h-[390px]  lg:flex lg:flex-col lg:items-center lg:justify-start lg:gap-[0px] lg:mt-1
lg:ml-24 lg:mr-4 lg:bg-[#0A1E2C] lg:relative lg:top-[100px]">
            <div className="lg:w-[505px] lg:h-[108px] lg:top-[133px] lg:left-[365px] lg:gap-[56px] lg:mt-[110px]">
              {/* 3 cards start */}
              <div className="lg:flex lg:justify-between">
                <div className="lg:w-[84px] lg:h-[108px] lg:flex lg:flex-col lg:justify-between">
                  <div className="lg:w-[87px] lg:h-[19px]">
                    <h3 className="lg:text-[15px] lg:font-semibold lg:leading-[19.2px] lg:text-[#FFFFFF] lg:text-left">
                      Quick Links
                    </h3>
                  </div>
                  <div className="lg:w-[77px] lg:h-[73px] lg:flex lg:flex-col lg:justify-between lg:space-y-[8px]">
                    <div className="lg:w-[45px] lg:h-[19px]">
                      <h3 className="lg:text-[16px] lg:font-normal lg:leading-[19.2px] lg:text-[#FFFFFF] lg:text-left">
                        Home
                      </h3>
                    </div>
                    <div className="lg:w-[77px] lg:h-[19px]">
                      <h3 className="lg:text-[16px] lg:font-normal lg:leading-[19.2px] lg:text-[#FFFFFF] lg:text-left">
                        About Us
                      </h3>
                    </div>
                    <div className="lg:w-[83px] lg:h-[19px]">
                      <h3 className="lg:text-[16px] lg:font-normal lg:leading-[19.2px] lg:text-[#FFFFFF] lg:text-left">
                        Contact us
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[153.5px] lg:h-[81px] lg:flex lg:flex-col lg:justify-between">
                  <div className="lg:w-[84px] lg:h-[19px]">
                    <h3 className="lg:text-[15px] lg:font-semibold lg:leading-[19.2px] lg:text-[#FFFFFF] lg:text-left">
                      Legal
                    </h3>
                  </div>
                  <div className="lg:w-[149px] lg:h-[46px] lg:flex lg:flex-col lg:justify-between lg:mt-auto">
                    <div className="lg:w-[149px] lg:h-[46px]">
                      <h3 className="lg:text-[16px] lg:font-normal lg:leading-[19.2px] lg:text-[#FFFFFF] lg:text-left">
                        Privacy Policy
                      </h3>
                    </div>
                    <div className="lg:w-[153.5px] lg:h-[46px]">
                      <h3 className="lg:text-[16px] lg:font-normal lg:leading-[19.2px] lg:text-[#FFFFFF] lg:text-left">
                        Terms and condition
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[165px] lg:h-[54px] lg:flex lg:flex-col lg:justify-between">
                  <div className="lg:w-[84px] lg:h-[19px]">
                    <h3 className="lg:text-[15px] lg:font-semibold lg:leading-[19.2px] lg:text-[#FFFFFF] lg:text-left">
                      Careers
                    </h3>
                  </div>
                  <div className="lg:w-[164px] lg:h-[19px] lg:flex lg:flex-col lg:justify-between lg:mt-auto">
                    <div className="lg:w-[165px] lg:h-[19px] lg:gap-[8px]">
                      <h3 className="lg:text-[16px] lg:font-normal lg:leading-[19.2px] lg:text-[#FFFFFF] lg:text-left">
                        Explore Opportunities
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3 cards end */}
            </div>

            <div className="lg:w-[232px] lg:h-[85px] lg:top-[281px] lg:left-[1138px]
   lg:gap-[16px] lg:ml-auto lg:mr-[45px] lg:mt-[10px] lg:flex lg:flex-col lg:justify-center">
              <div className="lg:w-[164px] lg:h-[29px] ">
                <h3 className="lg:text-[20px] lg:font-semibold lg:leading-[28.8px] lg:text-[#FFFFFF] lg:text-left">Connect With Us</h3>
              </div>
              {/* icon starts */}
              <div className="lg:w-[232px] lg:h-[40px] lg:gap-[56px] ">
                <div className="lg:w-[232px] lg:h-[40px] lg:gap-[56px] lg:flex lg:items-center lg:justify-between">

                  <div className="lg:w-[40px] lg:h-[40px]lg:flex lg:items-center lg:justify-center lg:text-white">
                    <Instagram />
                  </div>

                  <div className="lg:w-[40px] lg:h-[40px]  lg:flex lg:items-center lg:justify-center lg:text-white">
                    <Facebook />
                  </div>

                  <div className="lg:w-[40px] lg:h-[40px] lg:flex lg:items-center lg:justify-center lg:text-white">
                    <Twitter />
                  </div>

                </div>
              </div>

              {/* icon ends */}
            </div>
            {/*horizontal line starts */}
            <div className="lg:w-full lg:h-[0px]lg:top-[406px] lg:gap-[0px] lg:border lg:mt-[20px] lg:text-red-500">
            </div>
            <div className="lg:w-full lg:mt-[20px]">
              <h3 className="lg:text-[21px] lg:font-light lg:leading-[28.8px] lg:text-[#FFFFFF] lg:text-left lg:pl-[20px]">
                © 2023 QuantumTech Innovations. All rights reserved.
              </h3>
            </div>
            {/*horizontal line ends */}
          </section>
          {/* Sixth section ends */}
        </div>
      </section>
      <div>
      </div>
    </section>
  );
}
