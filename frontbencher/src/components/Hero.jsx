import Image from 'next/image';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';

function Hero() {
    return (
        <main className="relative h-full w-full  text-white font-geistSemiBold">
            <Image priority={true} quality={100} src={"/heroBg.png"} style={{objectFit:"fill"}} width={1728} height={400} className='h-[60vh] w-full lg:h-[70vh]' alt='bg-iamge'></Image>
            <div className='absolute top-[50%] -translate-y-[30%] left-[50%] -translate-x-[50%] flex flex-col items-center justify-center gap-2 sm:gap-2 lg:gap-4'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-[24px] sm:text-[36px] md:text-[46px] lg:text-[56px] text-nowrap'>Academy of Technology</h1>
                    <h2 className='text-[12px] sm:text-[16px] md:text-[20px] text-nowrap font-montserrat tracking-widest'>Translate your vision into reality</h2>
                </div>
                <div className='flex-col flex sm:flex-row gap-4 sm:gap-10  sm:items-center sm:justify-center mt-8 '>
                    <SecondaryButton title='Explore' color='orange' hoverEffectOn={true} padding='px-20'/>
                    <PrimaryButton title='Apply for admission' color='orange' hoverEffectOn={true} />
                </div>
            </div>
        </main>
    )
}

export default Hero