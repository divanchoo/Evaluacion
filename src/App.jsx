const App = () => {
  return (

    <>
      <div className="bg-[url('./assets/images/Recurso1.png')] bg-cover bg-no-repeat bg-white-100 min-h-screen" >
        <header className="">

          <div className="flex justify-center gap-20 justify-items-center px-20">
            <div>
              <button className="grow text-gray-200 text-sm">
                Home
              </button>
            </div>
            <div>
              <button className="grow text-gray-200 text-sm">
                About
              </button>
            </div>
            <div>
              <button className="grow text-gray-200 text-sm">
                Catalogue
              </button>
            </div>
            <div>
              <button className="grow text-gray-200 text-sm">
                Promo
              </button>
            </div>
            <div>
              <button className="grow text-gray-200 text-sm">
                Contact
              </button></div>


          </div>
        </header>
        <main>
          <div className="py-40">
            <h1 className=" text-6xl text-center font-semibold text-white">Fashion</h1>
            <h2 className=" text-6xl  text-center font-semibold text-white">Trending</h2>
            <p className="text-4xl text-center font-semibold text-white">Special Offer</p>
            <p className="text-4xl text-center font-semibold text-white">Only For You</p>
          </div>
          <article className="flex justify-center py-2">
            <p className=" text-1xl flex justify-center grow font-semibold text-black">Lorem Ipsum is simply
              dummy text of the printing
              and typesetting industry
              Lorem Ipsum has been the
              industry's standard dummy
              text ever since the 1500s
              when an unknown printer
              took a galley of type and</p>

          </article>
        </main>

      </div>
    </>

  )
}
export default App;