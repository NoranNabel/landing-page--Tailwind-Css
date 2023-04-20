function Search() {
    return (
        <>
        <section className="mt-40 bg-cover" style={{ backgroundImage: "url(/images/20AutumnCollage22.jpg)" , background:"cover"}}>
                <div class="py-16 text-center md:py-20">
                    <h3 class="font-serif  text-3xl tracking-wide text-white sm:text-4xl">
                        Let's keep in touch
                    </h3>
                    <p class="px-6 pt-3 font-serif text-lg text-white sm:text-xl">
                        Join our list and save 15% off your first order.
                    </p>
                    <form class="pt-10 sm:pt-12">
                        <div class="mx-auto flex w-5/6 flex-col items-center justify-center sm:w-3/4 sm:flex-row lg:w-3/5 xl:w-1/2">
                            <label for="cta_email" class="relative block h-0 w-0 overflow-hidden">Email</label>
                            <input type="text" placeholder="Type here" className="input input-bordered border-white w-full max-w-xs" />
                            <button type="button" class="btn  bg-orange-600 hover:bg-orange-700 border-none mt-4 w-full sm:ml-5 sm:mt-0 sm:w-auto" aria-label="Subscribe button">
                                SUBSCRIBE
                            </button>
                        </div>
                    </form>
                </div>
        </section>
         
        </>
    )
}
export default Search;