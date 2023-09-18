function Features() {

    return (
        <>
            <section>

                <div class="flex flex-col py-20 md:flex-row md:py-24">
                    <div class="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
                        <div>
                            <img src="/images/icon/icon-shipping.svg" class="h-12 w-12 object-contain object-center" alt="icon" />
                        </div>
                        <div class="ml-6 md:mt-3 lg:mt-0">
                            <h3 class="font-hk text-xl font-semibold tracking-wide text-orange-600">
                                Free shipping
                            </h3>
                            <p class="font-hk text-base tracking-wide text-secondary-lighter">
                                On all orders over $30
                            </p>
                        </div>
                    </div>

                    <div class="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
                        <div>
                            <img src="/images/icon/icon-support.svg" class="h-12 w-12 object-contain object-center" alt="icon" />
                        </div>
                        <div class="ml-6 md:mt-3 lg:mt-0">
                            <h3 class="font-hk text-xl font-semibold tracking-wide text-orange-600">
                                Always available
                            </h3>
                            <p class="font-hk text-base tracking-wide text-secondary-lighter">
                                24/7 call center available
                            </p>
                        </div>
                    </div>

                    <div class="mx-auto flex w-4/5 items-start justify-start pb-3 last:border-r-0 sm:w-1/2 md:w-2/5 md:flex-col md:items-center md:justify-center md:border-r-2 md:border-primary-lighter md:pb-0 md:text-center lg:mx-0 lg:w-1/3 lg:flex-row lg:text-left">
                        <div>
                            <img src="/images/icon/icon-return.svg" class="h-12 w-12 object-contain object-center" alt="icon" />
                        </div>
                        <div class="ml-6 md:mt-3 lg:mt-0">
                            <h3 class="font-hk text-xl font-semibold tracking-wide text-orange-600">
                                Free returns
                            </h3>
                            <p class="font-hk text-base tracking-wide text-secondary-lighter">
                                30 days free return policy
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
export default Features;