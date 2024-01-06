import { MdLocationPin } from "react-icons/md";

type Props = {
  rasturant?: {
    id: number;
    name: string;
    location: string;
    imageUrl: string;
  }
};

const ResturantCard = function(props: Props) {
  return (
    <aside className='h-40 py-2 px-3 rounded-lg border border-solid border-orange-600 shadow-lg flex-grow-0 flex-shrink-0 flex-[288px] my-2'
    >
      <h4>Resturant name</h4>
      <div className="image-container w-full h-20">
        <img src="/default-image.svg" alt="default" style={{ width: '100%', height: '100%'}} />
      </div>
      <div className="flex gap-2">
        <MdLocationPin
          className="text-orange-600 inline-block flex-grow-[2]"
          style={{
            fontSize: '2rem',
          }}
        />
        <p className="inline-block text-sm">Address Lorem ipsum dolor sit amet.</p>
      </div>
    </aside>
  )
}

export default ResturantCard;