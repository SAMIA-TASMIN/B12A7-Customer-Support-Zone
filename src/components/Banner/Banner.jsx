import image from '../../assets/vector1.png'
import img2 from '../../assets/vector2.png'

const Banner = ({ progress, resolved }) => {
  return (
    <div className="px-3 my-8">

      <div className="flex flex-col md:flex-row md:h-[200px] gap-4">

        {/* In Progress Box */}
        <div className="bg-gradient-to-t from-sky-500 to-indigo-500 
                         rounded-xl
                        w-full md:w-1/2 
                        flex justify-center items-center py-6">

          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl md:text-4xl font-semibold">In Progress</p>
            <p className="text-3xl md:text-5xl font-bold mt-2">
              {progress.length}
            </p>
          </div>
        </div>

        {/* Resolved Box */}
        <div className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 
                         rounded-xl
                        w-full md:w-1/2 
                        flex justify-center items-center py-6">

          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl md:text-4xl font-semibold">Resolved</p>
            <p className="text-3xl md:text-5xl font-bold mt-2">
              {resolved.length}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Banner;
