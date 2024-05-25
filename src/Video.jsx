/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZQyWUzfg10M
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

function Video() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-8"
      style={{
        backgroundImage: "url('src/assets/pexels-karolina-grabowska-4239147.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        <button className="bg-white text-black rounded-full p-4">
          <PlayIcon className="text-black hover:fill-hover-yellow w-60 h-28 fill-default" />
        </button>
        <h1 className="text-4xl text-default font-bold tracking-wider">Save Time & Money</h1>
        <p className="mt-4 text-xl text-white max-w-3xl mx-auto text-default font-segoe-ui tracking-wide mb-20">
          Phasellus risus turpis pretium sit amet magna non molestie ultricies enim.
        </p>
      </div>
    </section>
  )
}

export default Video;

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000"><path d="m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/>
    </svg>
  )
}