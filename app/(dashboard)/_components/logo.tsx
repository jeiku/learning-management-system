import Image from "next/image";
export const Logo = () => {
  return (
    <>
      <Image
        className='inline'
        height={58}
        width={58}
        alt='logo'
        src='/logo.svg'
      />
      <Image
        className='inline ml-[-15px]'
        height={58}
        width={58}
        alt='logo'
        src='/logo.svg'
      />
    </>
  );
};
