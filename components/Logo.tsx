import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} className="w-full h-full ">
      <Image alt="logo" src={logo} className=" object-contain w-full h-full" />
    </Link>
  );
};

export default Logo;
