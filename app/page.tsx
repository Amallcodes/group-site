import HomeNav from "./components/HomeNav"
import styles from "./Home.module.css"
import Image from "next/image"
// images
import charizinteriors from "./images/logos/charizinteriors.png"
import charizhomes from "./images/logos/charizhomes.png"
import chariztravels from "./images/logos/chariztravels.png"
import charizfurniture from "./images/logos/charizfurniture.png"
import charizinnovations from "./images/logos/charizinnovations.png"
import bravort from "./images/logos/bravort.png"
import one from "./images/logos/one.png"
import two from "./images/logos/two.png"
import three from "./images/logos/three.png"
import four from "./images/logos/four.png"
import five from "./images/logos/five.png"
import six from "./images/logos/six.png"
import imgmale from "./images/img-male.png"
import imgbusiness from "./images/img-business.png"
import vr from "./images/vr.png";
import vr2 from "./images/vr2.png";
import map from "./images/map.png"
import rectangle from "./images/rectangle.png"
import rectangle2 from "./images/Rectangle2.png"
import phone from "./images/phone.png"

// icons
import { FaPenNib, FaBed, FaUserAstronaut } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { LiaCouchSolid } from "react-icons/lia";
import { TiLightbulb } from "react-icons/ti";
import { BsRocketFill } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className={`top-section ${styles.topSection}`} id="top">
        {/* <div className={styles.topSectionOverlay}> */}
        <h1>Pioneering the future of <br />
          <span className="light-blue"> Digital</span> and <span className="light-blue">Design</span> Excellence</h1>

        <p>In the dynamic tapestry of today&apos;s business world,
          La Chariz Group emerges as a multidimensional
          powerhouse, synergizing tradition with technology,
          and craftsmanship with innovation.</p>

        <button>
          Book a consultation
        </button>
        {/* </div> */}

        <HomeNav />
      </div>

      <div className={styles.secondSection}>
        <div className={styles.heading}>
          <h2>Emerging as a <span className="orange">beacon</span> in the contemporary business tapestry,
            La Chariz Group is a <span className="orange">multidimensional enterprise</span> dedicated to <span className="orange">design and digital excellence.</span></h2>
          <p>We are artisans and innovators, travelers, and technologists. From transforming interiors to curating unparalleled travel experiences, from crafting timeless furniture to pioneering digital optimization strategies, we stand at the crossroads of tradition and technology.</p>
        </div>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <Image alt="image" src={one}
              width={80}
              quality={100}
              className={`${styles.number} ${styles.numberLeft}`}
            />
            <div className={styles.halfBoxLeft}></div>
            <div className={styles.innerBox}>
              <Image
                alt="logo"
                src={charizinteriors}
                width={80}
                quality={100}
                layout="intrinsic"
              />
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.innerBox}>
              <Image
                alt="logo"
                src={charizhomes}
                width={80}
                quality={100}
              />
            </div>
            <div className={styles.halfBoxRight}></div>
            <Image alt="image"
              src={two}
              width={80}
              quality={100}
              className={`${styles.number} ${styles.numberRight}`}
            />
          </div>

          <div className={styles.box}>
            <Image alt="image"
              src={three}
              width={80}
              quality={100}
              className={`${styles.number} ${styles.numberLeft}`}
            />
            <div className={styles.halfBoxLeft}></div>
            <div className={styles.innerBox}>
              <Image
                alt="logo"
                src={chariztravels}
                width={80}
                quality={100}
              />
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.innerBox}>
              <Image
                alt="logo"
                src={charizfurniture}
                width={80}
                quality={100}
              />
            </div>
            <div className={styles.halfBoxRight}></div>
            <Image alt="image"
              src={four}
              width={80}
              quality={100}
              className={`${styles.number} ${styles.numberRight}`}
            />
          </div>

          <div className={styles.box}>
            <Image alt="image"
              src={five}
              width={80}
              quality={100}
              className={`${styles.number} ${styles.numberLeft}`}
            />
            <div className={styles.halfBoxLeft}></div>
            <div className={styles.innerBox}>
              <Image
                alt="logo"
                src={charizinnovations}
                width={80}
                quality={100}
              />
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.innerBox}>
              <Image
                alt="logo"
                src={bravort}
                width={80}
                quality={100}
                className={styles.bravortImage}
              />
            </div>
            <div className={styles.halfBoxRight}></div>
            <Image alt="image"
              src={six}
              width={80}
              quality={100}
              className={`${styles.number} ${styles.numberRight}`}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.thirdSection} section`}>
        <div className={`${styles.thirdImageBoxes} `}>
          <Image src={imgmale} alt="image of a person" />
          <Image src={imgbusiness} alt="image of a person" />
        </div>

        <div className={styles.ImageLinks}>

          <div className={styles.ImageLink}>
            <div className={styles.imageHeading}>
              <FaPenNib className={styles.imageIcon} />
              <h3>Elevated Design & Comfort</h3>
            </div>

            <div className={styles.imageBackground}></div>
          </div>

          <div className={styles.ImageLink}>
            <div className={styles.imageHeading}>
              <FaBed className={styles.imageIcon} />
              <h3>Premium Short Stays</h3>
            </div>

            <div className={styles.imageBackground}></div>
          </div>

          <div className={styles.ImageLink}>
            <div className={styles.imageHeading}>
              <LiaCouchSolid className={styles.imageIcon} />
              <h3>Artisanal Furniture</h3>
            </div>

            <div className={styles.imageBackground}></div>
          </div>

          <div className={styles.ImageLink}>
            <div className={styles.imageHeading}>
              <TiLightbulb className={styles.imageIcon} />
              <h3>Tech-Forward Solutions</h3>
            </div>

            <div className={styles.imageBackground}></div>
          </div>

          <div className={styles.ImageLink}>
            <div className={styles.imageHeading}>
              <GiCommercialAirplane className={styles.imageIcon} />
              <h3>Tailored Travel Adventures</h3>
            </div>

            <div className={styles.imageBackground}></div>
          </div>
        </div>
      </div>

      <div className={`${styles.fourthSection} section"`}>
        <div className={styles.heading}>
          <h2><span className="orange">Tradition meets Technology</span></h2>
          <h3>At La Chariz Group, we believe in the power of synergy. By interweaving the time-honored principles of craftsmanship with the dynamic capabilities of modern technology, we craft solutions that are both timeless and forward thinking.</h3>

        </div>
      </div>

      <div className="fifth-section section bg-[var(--black)] mt-8 mb-8 ">
        <div className="flex flex-col items-center justify-between lg:flex-row lg:w-[80%] m-auto lg:mb-10 pt-4 pb-4">
          <Image src={map} alt="map" className="w-80 mb-10 lg:h-60 lg:w-auto lg:mb-0"></Image>
          <div className="lg:text-left lg:w-[45%]">
            <h3>Every project we touch, be it in design, technology, or
              travel, resonates with a commitment to excellence, personalization, and a
              dedication to creating lasting memories and value.
            </h3>
          </div>
        </div>

        <div className="">
          <div className="group transition-all duration-300 ease-in-out hover:bg-[var(--light-blue)] hover:text-[var(--black)] pl-4 pr-4 pt-8 pb-8 m-4 mb-10 border-[var(--light-blue)] border-[1px] lg:flex lg:items-center lg:justify-center">
            <div className="relative h-[50px] lg:w-[200px] border-b-[1px] border-[var(--light-blue)] pb-4 lg:border-b-[0] group-hover:border-[var(--black)] lg:border-r-[1px] lg:pl-10 lg:pr-10">
              <BsRocketFill size={24} className="m-auto lg:mt-2  group-hover:hidden" />
              <p className="group-hover:text-black text-[1rem] pb-4 lg:pb-2 hidden  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:block">Mission</p>
            </div>

            <p className="lg:text-left mt-4 lg:mt-0 lg:ml-10">
              At La Chariz Group, our mission is to pioneer the intersection of design and technology, transforming spaces and experiences with a blend of tradition and innovation. We strive to craft solutions that resonate with personal style, comfort, and operational excellence, ensuring every endeavor we undertake elevates the standards of functionality and aesthetics.
            </p>
          </div>

          <div className="group transition-all duration-300 ease-in-out hover:bg-[var(--light-blue)] hover:text-[var(--black)] pl-4 pr-4 pt-8 pb-8 m-4 mb-10 border-[var(--light-blue)] border-[1px] lg:flex items-center justify-center">
            <div className="relative h-[50px] lg:w-[200px] border-b-[1px] border-[var(--light-blue)] pb-4 lg:border-b-[0] group-hover:border-[var(--black)] lg:border-r-[1px] lg:pl-10 lg:pr-10">
              <FaUserAstronaut size={24} className="m-auto lg:mt-2 group-hover:hidden" />
              <p className="group-hover:text-black text-[1rem] pb-4 lg:pb-2 hidden  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:block">Vision</p>
            </div>

            <p className="lg:text-left mt-4 lg:mt-0 lg:ml-10">
              We envision a world where design seamlessly meets functionality, where the nuances of tradition are amplified by technology, and where every journey—whether digital or tangible—reflects unmatched excellence. A world where every corner, every artifact, and every experience echoes the promise of the future.            </p>
          </div>
        </div>
      </div>

      <div className="section grid gap-y-[50px] lg:gap-y-[30px] lg:gap-x-auto gap-x-[50px] justify-center items-center grid-cols-2 md:grid-cols-3 lg:mr-[2rem] lg:ml-[2rem]">

        <div className="lg:text-left w-40 m-auto">
          <h2 className="lg:text-[5rem] lg:mb-[-40px] mb-[-20px] text-[3rem] tracking-[.5rem] relative z-0">01</h2>
          <div className="bg-[var(--background-blue)] relative z-[1] pt-4">
            <h3 className="font-light">Excellence in Craftsmanship</h3>
          </div>
        </div>

        <div className="lg:text-left w-40 m-auto">
          <h2 className="lg:text-[5rem] lg:mb-[-40px] mb-[-20px] text-[3rem] tracking-[.5rem] relative z-0">02</h2>          <div className="bg-[var(--background-blue)] relative z-[1] pt-4">
            <h3 className="font-light m-auto w-20">Pioneering Innovation</h3>
          </div>
        </div>

        <div className="lg:text-left w-40 m-auto">
          <h2 className="lg:text-[5rem] lg:mb-[-40px] mb-[-20px] text-[3rem] tracking-[.5rem] relative z-0">03</h2>          <div className="bg-[var(--background-blue)] relative z-[1] pt-4">
            <h3 className="font-light">Customer-Centric Experiences</h3>
          </div>
        </div>

        <div className="lg:text-left w-40 m-auto">
          <h2 className="lg:text-[5rem] lg:mb-[-40px] mb-[-20px] text-[3rem] tracking-[.5rem] relative z-0">04</h2>          <div className="bg-[var(--background-blue)] relative z-[1] pt-4">
            <h3 className="font-light">Seamless Digital Integration</h3>
          </div>
        </div>

        <div className="lg:text-left w-40 m-auto">
          <h2 className="lg:text-[5rem] lg:mb-[-40px] mb-[-20px] text-[3rem] tracking-[.5rem] relative z-0">05</h2>          <div className="bg-[var(--background-blue)] relative z-[1] pt-4">
            <h3 className="font-light">Sustainability</h3>
          </div>
        </div>

        <div className="lg:text-left w-40 m-auto">
          <h2 className="lg:text-[5rem] lg:mb-[-40px] mb-[-20px] text-[3rem] tracking-[.5rem] relative z-0">06</h2>          <div className="bg-[var(--background-blue)] relative z-[1] pt-4">
            <h3 className="font-light">Community Engagement</h3>
          </div>
        </div>

      </div>

      <div className="section">
        <div className="">
          {/* <Image
              src={vr}
              alt="image"
              quality={100}
              className="hidden lg:block h-[250px] lg:mt-10 lg:h-auto 
            lg:w-[95%] m-auto"
            /> */}
          <div className="relative hidden lg:flex w-[90%] mt-[30px] m-auto">
            <div className="text-left">
              <Image
                src={rectangle2}
                alt="image"
                quality={100}
                className="w-full"
              />

              <div className="text-white font-bold w-[300px] absolute left-[4rem] top-1/2 transform -translate-y-1/2">
                <p className="text-[1.5rem]">At La Chariz Group, our mission is expansive and rooted in the future</p>
              </div>
            </div>

            <Image
              src={vr2}
              alt="image"
              // quality={10}
              className="absolute right-0 bottom-0 h-[100%] w-[50%]"
            />
          </div>

          <div className="relative lg:hidden w-[90%] mt-[30px] m-auto">
            <Image
              src={vr2}
              alt="image"
              // quality={10}
              className="absolute top-[-1.5rem] w-full right-0"
            />

            <div className="">
              <Image
                src={rectangle}
                alt="image"
                quality={100}
                className="w-full"
              />

              <div className="text-white w-[80%] m-auto absolute left-[2rem] top-2/3 transform -translate-y-1/4">
                <p className="text-[1.3rem] lg:text-[1.5rem]">At La Chariz Group, our mission is expansive and rooted in the future</p>
              </div>
            </div>

          </div>
          {/* <Image src={vr} alt="image" quality={100} className=" h-[250px] lg:mt-10 lg:h-auto lg:w-[95%] m-auto" /> */}
        </div>

        <p className="text-[1rem] m-auto md:w-[400px] mt-[2.5rem] mb-10">We envision a world where <span className="orange">design meets functionality</span>,
          where <span className="orange">business meets technology,</span> and where every
          journey, be it in the digital realm or the real world, is an
          <span className="orange">experience par excellence.</span>
        </p>

        <h2 className="text-white text-[1.5rem] lg:w-[60%] lg:text-[2.1rem] m-auto">
          Join us, and let‘s co-create a future brimming with possibilities and success.
        </h2>

      </div>

      <div className="bg-[var(--light-blue)] section mt-10">
        <div className="w-[100%] lg:flex justify-between items-center lg:pt-[3rem] lg:pb-[3rem] pb-10 pt-10">
          <div className="lg:text-left">
            <h2 className="text-[var(--background-blue)] m-auto lg:m-0 lg:mb-[20px] lg:w-[200px] text-[2rem]">Download our app</h2>
            <p className="text-[var(--black)] text-[1.1rem] w-[290px] m-auto lg:m-0 ">You can get it on the google or Apple store</p>
            <button className="text-[var(--black)] border-[var(--black)] border-[1px] mt-8">Coming soon</button>
          </div>

          <div className="lg:mr-[-4rem] flex items-center justify-center lg:block">
            <Image
              className="lg:w-[70%]"
              src={phone} alt="phone image" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;
