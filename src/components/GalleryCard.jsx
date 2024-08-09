function GalleryCard({ imageSrc, title, location, description }) {
  return (
    <div className="w-[47%]w-[47%] bg-white shadow-sm h-fit border-[1px] min-h-[500px] md:min-h-[630px] border-gray-300 rounded-[8px]">
      <img src={imageSrc} className="rounded-t-[8px] w-full" alt={title} />
      <div className="py-5 px-3 flex flex-col justify-start items-start gap-2 text-primary">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <h2 className="text-2xl">{location}</h2>
        <p className="text-sm py-2 font-normal">{description}</p>
        <button className="bg-transparent border-none font-medium mt-2">
          See more...
        </button>
      </div>
    </div>
  );
}

export default GalleryCard;
