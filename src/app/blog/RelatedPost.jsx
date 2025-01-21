import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";

const RelatedPost = ({ image, slug, title, date }) => {
  return (
    <div>
      <div className="flex items-center lg:block xl:flex">
        <div className="mr-5 lg:mb-3 xl:mb-0">
          <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
            <Image src={image} alt={title} fill className=" object-cover" />
          </div>
        </div>
        <div className="w-full">
          <h5>
            <Link
              href={slug}
              className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
            >
              {title}
            </Link>
          </h5>
          <Moment format="MMMM DD, YYYY">{date}</Moment>
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
