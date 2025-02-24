import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse mx-auto w-3/4">
          <Image
            className="w-1/2 object-contain"
            src="/extended-flowers.png"
            alt="The Petal Project Logo"
            width={1200}
            height={1200}
          />
          <div className="flex flex-col w-1/2 gap-4">
            <p className="text-4xl font-heading">Welcome to</p>
            <h1 className="text-7xl font-bold font-heading">
              The Petal Project
            </h1>
            <p className="font-body py-6">
            Petal is an intuitive communication tool that helps those with
            communication issues or disorders navigate their needs through
            visual organization—giving them a voice when words fail.
            </p>
            <button className="btn btn-primary w-60 font-body">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
