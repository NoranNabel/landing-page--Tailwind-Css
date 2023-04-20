function Grid() {
    return (<>
       <section>
                <div className="grid grid-cols-1 mx-auto gap-8 pb-20 md:pb-24 lg:grid-cols-2 lg:pb-32" >
                    <div className="mx-auto px-10 text-center lg:mx-0 lg:text-left">
                        <div className="pb-4 md:pb-10 lg:w-3/4 lg:pt-10 xl:w-2/3">
                            <h1 className=" text-4xl font-serif md:text-4xl lg:text-6xl">
                                Trending Elyssi Collections
                            </h1>
                            <p className="pt-4 font-hk text-xl text-slate-500">
                                Checkout our newest trends this coming season
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-10 lg:mt-0">
                        <div className="relative h-56 bg-cover bg-left bg-no-repeat px-10 sm:h-80 sm:bg-center" style={{ backgroundImage: `url("/images/grid/grid1.jpg")` }}>
                            <div className="absolute inset-0 w-2/3 px-6 py-14 md:px-10">
                                <h3 className="font-hk text-2xl font-semibold  sm:text-2xl md:text-3xl">
                                    Passion Pearl <br /> Collection
                                </h3>
                                <a href="/" className="group flex items-center pt-5">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                    <span className="-mt-1 pl-3 font-hk font-semibold leading-none text-orange-600 text-2xl transition-colors group-hover:text-v-red sm:pl-5 ">
                                        Get it now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-56 bg-cover bg-left bg-no-repeat sm:h-80 sm:bg-center lg:h-68" style={{ backgroundImage: `url("/images/grid/grid44.jpg")` }}>
                        <div className="absolute inset-0 px-6 py-14 md:w-2/3 md:px-10">
                            <h3 className="font-hk text-2xl font-semibold  sm:text-2xl md:text-3xl">
                                SPECIAL PRICE
                            </h3>
                            <a href="/" className="group flex items-center pt-5">

                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>

                                <p className="-mt-1 pl-3 font-hk font-semibold leading-none text-orange-600 text-2xl transition-colors group-hover:text-v-red sm:pl-5 ">
                                    Get it now
                                </p>

                            </a>
                        </div>
                    </div>
                    <div className="relative h-56 bg-cover bg-left bg-no-repeat px-10 sm:h-80 sm:bg-center lg:row-span-2 lg:h-auto" style={{ backgroundImage: `url("/images/grid/grid33.jpg")` }}>
                        <div className="absolute inset-0 w-2/3 px-6 py-14 sm:py-16 md:px-10">
                            <h3 className="font-hk text-2xl font-semibold  sm:text-2xl md:text-3xl">
                                TOPS COLLECTION
                            </h3>
                            <a href="/" className="group flex items-center pt-5">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                                <p className="-mt-1 pl-3 font-hk font-semibold leading-none text-orange-600 text-2xl transition-colors group-hover:text-v-red sm:pl-5 ">
                                    Get it now
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="relative h-56 bg-cover bg-left bg-no-repeat sm:h-80 sm:bg-center lg:h-68" style={{ backgroundImage: `url("/images/grid/grid2.jpg")` }}>
                        <div className="absolute inset-0 w-2/3 px-6 py-14 md:px-10">
                            <h3 className="font-hk text-2xl font-semibold  sm:text-2xl md:text-3xl">
                                BEST HIT
                            </h3>
                            <a href="/" className="group flex items-center pt-5">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                                <p className="-mt-1 pl-3 font-hk font-semibold leading-none text-orange-600 text-2xl transition-colors group-hover:text-v-red sm:pl-5 ">
                                    Get it now
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    </>)
}
export default Grid;