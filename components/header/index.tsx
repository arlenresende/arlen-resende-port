export default function Header() {
  return (
    <header className="flex items-center justify-center lg:justify-between">
      <div className="flex justify-center lg:justify-start">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold text-black mb-2">
            Arlen Resende
          </h1>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm  text-gray-500 ">Software Engineer</p>
            <p className="text-sm  text-gray-500 ">Data Engineer</p>
            <p className="text-sm  text-gray-500">Technical Writer</p>
          </div>
        </div>
      </div>
    </header>
  )
}
