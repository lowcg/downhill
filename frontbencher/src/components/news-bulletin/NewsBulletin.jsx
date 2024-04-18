import React from 'react'
import HeaderTitle from '../HeaderTitle'
import { Images } from '../../../public/assets'
import Image from 'next/image'
import NewsCard from '../NewsCard'
const NewsSampleInfo = [
  {
    title: 'The admit card for the even semester examination has been released.',
    date: '2m ago',
  },
  {
    title: 'The admit card for the even semester examination has been released.',
    date: '30m ago',
  },
  {
    title: 'The admit card for the even semester examination has been released.',
    date: '1h ago',
  },
  {
    title: 'The admit card for the even semester examination has been released.',
    date: '1h ago',
  },
  {
    title: 'The admit card for the even semester examination has been released.',
    date: '1h ago',
  },
  {
    title: 'The admit card for the even semester examination has been released.',
    date: '1h ago',
  },

]
export default function NewsBulletin() {
  return (
    <>
      <div className='flex flex-col  gap-[56px] items-center px-4 sm:px-20 w-full pb-[56px] mt-[56px]'>
        <HeaderTitle title={"News Bulletin"} />
        <div className='flex flex-col sm:flex-row w-full gap-4 sm:gap-10'>
          <div className='flex-col drop-shadow-md rounded-md bg-pure-white h-auto sm:h-[640px] w-full'>
            <Image src={Images.heroBg} alt='heroBg' className='rounded-t-md h-[345px]' />
            <div className='flex flex-col flex-1 px-10 py-12 gap-8'>
              <div className='flex w-full justify-between items-center'>
                <div className='bg-orange text-white rounded-full px-4 py-1 w-auto sm:w-auto flex items-center justify-center text-sm font-geistRegular'>
                  Top News
                </div>
                <Image src={Images.share} alt='heroBg' />
              </div>
              <p>The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.</p>
              <p className='font-geistRegular text-base '>2m ago</p>
            </div>
          </div>
          <div className='flex-col drop-shadow-md rounded-md bg-pure-white h-[640px] w-full p-4 flex overflow-y-auto gap-4'>

            {
              NewsSampleInfo.map((info, index) => (
                <NewsCard key={index} title={info.title} date={info.date} />
              )
              )
            }

          </div>

        </div>
      </div>

    </>
  )
}
