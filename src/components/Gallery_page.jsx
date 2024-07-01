import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Gallery_page() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto text-center my-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Collage Alumni's Gallery
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
        </h1>
      </div>
      <div className="columns-1 md:columns-2 xl:columns-3 gap-7 m-4 ">
        <div className=" break-inside-avoid mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031162.jpg"
            alt="Gallery image"
          />
        </div>
        <div className=" break-inside-avoid  mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031232.jpg"
            alt="Gallery image"
          />
        </div>
        <div className=" break-inside-avoid  mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031357.jpg"
            alt="Gallery image"
          />
        </div>
        <div className=" break-inside-avoid  mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031375.jpg"
            alt="Gallery image"
          />
        </div>
        <div className=" break-inside-avoid  mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031396.jpg"
            alt="Gallery image"
          />
        </div>
        <div className=" break-inside-avoid  mb-8">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688031414.png"
            alt="Gallery image"
          />
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Campus Gallery
            </h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Our Campus Area Gallery. how Our campus is look There some Images
              you can see
            </p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/500x300"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/501x301"
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/601x361"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Gallery_page;
