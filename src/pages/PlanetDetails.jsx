import { useOutletContext } from 'react-router-dom'

export default function Overview({ image, type }) {
  const { currentItem } = useOutletContext()

  return (
    <>
      <div className="flex flex-col justify-center items-center md:col-span-2 xl:col-span-1 xl:row-span-2 xl:items-center xl:ml-[5.625rem]">
        <img className="max-w-[173px] md:max-w-[285px] xl:max-w-none" src={currentItem.images[image]} alt={currentItem.name} />
        {type === 'geology' && (
          <img src={currentItem.images.geology} className="max-w-[75px] mt-[-2.5rem] xl:max-w-[163px] xl:mt-[-5rem]" alt="Geology" />
        )}
      </div>
      <div className="text-center md:text-left xl:max-w-[350px] xl:justify-self-end">
        <h1 className="font-display uppercase text-h2 leading-h2 xl:text-h1 xl:leading-h1">{currentItem.name}</h1>
        <p className="mt-4 text-h4 leading-[2] md:mt-6 xl:text-body xl:leading-body">{currentItem[type].content}</p>
        <div className="flex justify-center md:justify-start items-center text-h3 leading-body mt-8 opacity-50 xl:mt-6 xl:text-body">
          <span className="mr-1">Source : </span>
          <a href={currentItem[type].source} target="_blank" className="font-bold underline">
            Wikipedia
          </a>
          <img src="/assets/icon-source.svg" className="ml-1" alt="Source icon" />
        </div>
      </div>
    </>
  )
}
