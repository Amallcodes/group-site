import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Icons = () => {
    return (
        <div className="icons">
            <Link href="" className="icon-case"> <FaXTwitter className="icon" /> </Link>
            <Link href="" className="icon-case"> <FaLinkedinIn className="icon" /> </Link>
            <Link href="" className="icon-case"> <FaInstagram className="icon" /> </Link>
            <Link href="" className="icon-case"> <FaFacebookF className="icon" /> </Link>
        </div>
    );
}

export default Icons;