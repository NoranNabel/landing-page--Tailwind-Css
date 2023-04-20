import Brands from "../components/Brands";
import Caroussel from "../components/Carousel";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import OutoSlider from "../components/OutoSlide";
import Relative from "../components/Relative";
import Search from "../components/Search";

function Home() {
    return (
        <>
            <Features />

            <Grid />

            <Caroussel />

            <OutoSlider />

            <Brands />

            <Relative />

            <Search />
            
            <Footer />
            <section>
                {/* <div className="carousel w-full mt-20">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="/images/carousel/watch-1.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="/images/carousel/shoes-1.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="/images/carousel/purse-1.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="/images/carousel/backpack-2.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> */}


                {/* <Caroussel /> */}

            </section>
        </>
    )
}

export default Home;