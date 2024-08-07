    import React from "react";
    import Image from "next/image";
    const OurTrusted = () => {
    return (
        <div className="bg-bgclr">
        <div className="text-center">
            <h1 className="text-primary text-4xl pt-12">
            {" "}
            <strong>Our Trusted Suppliers</strong>
            </h1>
            <h3 className="text-primary text-2xl font-semibold pt-3">
            Partnering with Industry Leaders for Quality and Innovation
            </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-14 py-12">
            <div className="flex items-center justify-center ">
            <div className="bg-white p-10 rounded-3xl shadow-transparent">
                <Image
                src="/ourtrusted/Samsung_Logo.png"
                width={500}
                height={500}
                className="h-[70px] w-[150px]"
                alt="Samsung Logo"
                />
            </div>
            </div>

            <div className="flex items-center justify-center">
            <div className="bg-white p-10 rounded-3xl shadow-transparent">
                <Image
                src="/ourtrusted/Fujifilm-logo.png"
                width={500}
                height={500}
                className="h-[70px] w-[150px]"
                alt="Fujifilm Logo"
                />
            </div>
            </div>

            <div className="flex items-center justify-center">
            <div className="bg-white p-10 rounded-3xl shadow-transparent">
                <Image
                src="/ourtrusted/schiller.png"
                width={500}
                height={500}
                className="h-[70px] w-[150px]"
                alt="Schiller America Logo"
                />
            </div>
            </div>

            <div className="flex items-center justify-center">
            <div className="bg-white p-10 rounded-3xl shadow-transparent">
                <Image
                src="/ourtrusted/transasia.png"
                width={500}
                height={500}
                className="h-[70px] w-[150px]"
                alt="Transasia Logo"
                />
            </div>
            </div>

            <div className="flex items-center justify-center">
            <div className="bg-white p-10 rounded-3xl shadow-transparent">
                <Image
                src="/ourtrusted/allengers.png"
                width={500}
                height={500}
                className="h-[70px] w-[150px]"
                alt="Allengers Logo"
                />
            </div>
            </div>

            <div className="flex items-center justify-center">
            <div className="bg-white p-10 rounded-3xl shadow-transparent">
                <Image
                src="/ourtrusted/cardioVision.png"
                width={500}
                height={500}
                className="h-[70px] w-[150px]"
                alt="Cardio Vision Logo"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default OurTrusted;
