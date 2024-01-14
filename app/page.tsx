import Image from "next/image";
import Link from "next/link";

const BlogViewCard = () => {
  return (
    <div className="bg-primary h-screen w-screen flex items-center justify-center">
      <div className="bg-white border border-black rounded" id="parent">
        <div className="p-4 flex flex-col items-start justify-center">
          <Image
            className="rounded-lg w-64 self-center"
            src={"/images/illustration-article.svg"}
            alt="illustration image"
            width={100}
            height={100}
          />
          <div className="mt-3">
            <p className="font-fig font-extrabold  bg-primary text-xs px-2 py-1 rounded">
              Learning
            </p>
          </div>
          <div className="mt-2">
            <p className="font-fig text-xs">Published 21 Dec 2023</p>
          </div>
          <div className="mt-3">
            <Link
              className="font-fig font-extrabold text-lg hover:text-primary"
              href="#"
              id="child"
            >
              HTML & CSS foundations
            </Link>
          </div>
          <div className="mt-3">
            <p className="font-fig text-xs">
              These languages are the backbone of every
              <br />
              website , defining structure, content, and <br /> presentation.
            </p>
          </div>
          <div className="mt-6">
            <Image
              className="h-7 w-7 rounded-full inline"
              src={"/images/image-avatar.webp"}
              alt="user image"
              width={100}
              height={100}
            />
            <span className="font-fig font-extrabold text-xs mx-2">
              Greg Hooper
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogViewCard;
