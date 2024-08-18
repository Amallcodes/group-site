import HomeNav from "./components/HomeNav"
import styles from "./Home.module.css"
import Image from "next/image"
// images
import charizinteriors from "/public/images/logos/charizinteriors.png"
import charizhomes from "/public/images/logos/charizhomes.png"
import chariztravels from "/public/images/logos/chariztravels.png"
import charizfurniture from "/public/images/logos/charizfurniture.png"
import charizinnovations from "/public/images/logos/charizinnovations.png"
import bravort from "/public/images/logos/bravort.png"
import one from "/public/images/logos/one.png"
import two from "/public/images/logos/two.png"
import three from "/public/images/logos/three.png"
import four from "/public/images/logos/four.png"
import five from "/public/images/logos/five.png"
import six from "/public/images/logos/six.png"
import imgmale from "/public/images/img-male.png"
import imgbusiness from "/public/images/img-business.png"

// icons
import { FaPenNib, FaBed } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { LiaCouchSolid } from "react-icons/lia";
import { TiLightbulb } from "react-icons/ti";

const Home = () => {
  return (
    <div>
      <div className={`top-section ${styles.topSection}`}>
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
    </div>
  )
}

export default Home;
