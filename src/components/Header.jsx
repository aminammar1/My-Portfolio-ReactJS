{
  /* <Header />  */
}

export default function Header() {
  return (
    <header className="p-4 md:p-20 lg:grid lg:grid-cols-2">
      <div className="flex justify-center items-center">
        <img
          src="assets/profile-pic.png"
          className="max-w-xs md:max-w-sm lg:max-w-md rounded-full shadow-lg"
          alt="Profile Picture"
        />
      </div>
      <div className=" flex flex-col  items-start gap-5 justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Hi, I&apos;m Mohamed Amine
        </h1>
        <p className="text-lg text-gray-300 sm:flex-row">
          I&apos;m a software engineer from Monastir, Tunisia, specializing in
          efficient, user-focused applications across full-stack, mobile, and
          backend development.
        </p>
        <button
          className="bg-green-700 p-3 px-6 rounded-lg hover:bg-green-900 text-white transition"
          onClick={() => {
            window.open(
              "https://drive.google.com/uc?export=download&id=1zBS-dAD3_ZgakekMtTwWQX3HLbVadY1u",
              "_blank"
            );
          }}
        >
          View CV
        </button>
      </div>
    </header>
  );
}
