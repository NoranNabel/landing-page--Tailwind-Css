import SmallCarousel from "./SmallCarousel";

function OutoSlider() {

    return (
        <>
            <section className="mt-40" style={{ backgroundColor: "#A9907E" }}>


                <div class="container mx-auto ">
                                                {/*__________________ Section 1 ______________*/}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto" style={{ width: "97%" }}>
                        <div className="flex col-span-2 mt-10">
                            <SmallCarousel />
                        </div>

                        <div className="dev1 flex mt-10">
                            <div className=" mb-3 md:pb-10 lg:w-3/4 lg:pt-10 xl:w-2/3 text-white ">
                                <h1 className=" text-2xl w-[350px] font-serif md:text-2xl lg:text-2xl">
                                    Stylish Shirts , Only For You
                                </h1>
                                <p className=" font-hk text-xl">
                                    Featured Collection
                                </p>
                                <a href="#">
                                    <img className="h-72 mt-4 " src="/images/carousel/Casual Outwear Plaid Shirts Long Sleeve OUT0795.png" alt="product image" />
                                </a>
                            </div>
                            <br />
                        </div>

                    </div>
                                                {/*__________________ Section 2 ______________*/}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto" style={{ width: "97%" }}>

                        <div className="flex ml-24 ">
                            <div className="dev2 flex mt-10">
                                <div className="ml-5 mb-3 md:pb-10 lg:w-3/4 lg:pt-10 xl:w-2/3 text-white ">
                                    <h1 className=" text-2xl w-[350px] font-serif md:text-2xl lg:text-2xl">
                                    New season, matching shoes
                                    </h1>
                                    <p className=" font-hk text-xl">
                                    Featured Collection
                                    </p>
                                    <a href="#">
                                        <img className="h-72 mt-4 w-[300px]" src="/images/carousel/The feeling to wear the One Piece customized shoes is good_.jpg" alt="product image" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex col-span-2 mt-10">
                            <SmallCarousel />
                        </div>
                    </div>
                                              {/*__________________ Section 3 ______________*/}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto" style={{ width: "97%" }}>
                        <div className="flex col-span-2 mt-10 mb-10">
                            <SmallCarousel />
                        </div>

                        <div className="dev3 flex mt-8">
                            <div className="ml-5 mb-3 md:pb-10 lg:w-3/4 lg:pt-10 xl:w-2/3 text-white ">
                                <h1 className=" text-2xl w-[350px] font-serif md:text-2xl lg:text-2xl">
                                are you study? You need good bags
                                </h1>
                                <p className=" font-hk text-xl">
                                    Featured Collection
                                </p>
                                <a href="#">
                                    <img className="h-72 mt-4 w-[250px]" src="/images/Bird in Bag - Plaid Pattern Patch Decor Classic Backpack  - Women Backpacks - Multicolor-3.jpg" alt="product image" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>               
            </section>
        </>
    )
}
export default OutoSlider;