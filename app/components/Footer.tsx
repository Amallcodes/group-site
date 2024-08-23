import Link from "next/link";
import Icons from "./page-components/Icons"

const Footer: React.FC = () => {
    const date = new Date();
    let year = date.getFullYear();

    return (
        <div className={`footer section bg-[var(--black)] text-left`}>
            <h1
                className="text-[var(--light-blue)] text-[2.5rem] lg:text-[4rem] mb-10 mt-10"
            >Let&apos;s Talk

            </h1>

            <div className="text-white lg:flex justify-between items-center">
                <div className="">
                    <div className="mb-[4rem]">
                        <p className="text-[silver] mb-[10px]">General enquiries</p>
                        <p>business@lachariz.com</p>
                    </div>

                    <div className="mb-10">
                        <p className="text-[silver] mb-[10px]">Office Address</p>
                        <p>4th Floor, Ocean Centre,</p>
                        <p>Off Oladipo Diya Road, Gudu,</p>
                        <p>Apo Abuja,</p>
                    </div>
                </div>

                <div className="lg:text-right">
                    <div className="orange mb-20 hidden lg:block">
                        <Link href="#top"><p>Go back to top</p></Link>
                    </div>
                    <div className="mb-10">
                        <p className="text-[silver]">Social media</p>
                        <Icons />
                    </div>

                    <div className="lg:flex w-[250px] justify-between">
                        <p className="mb-[1rem]">Terms and conditions</p>
                        <p className="mb-[1rem]">Privacy Policy</p>
                    </div>
                </div>
            </div>

            <hr className="mt-[3.5rem]" />

            <div className="mt-10 mb-10 text-center text-white">
                <p className="">All Rights Reserved © La Chariz Group {year}</p>
            </div>

        </div>
    );
}

export default Footer;