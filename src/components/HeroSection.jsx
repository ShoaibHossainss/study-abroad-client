import { Link } from 'react-scroll';
import img1 from '../assets/study abroad 13-02-2025 at 21-54-37.jpeg';
import img2 from '../assets/study abroad 13-02-2025 at 21-54-39.jpeg';
import img3 from '../assets/study abroad 13-02-2025 at 21-54-42.jpeg';

const HeroSection = () => {
    return (
      <div className="flex">
      <div className="w-1/2 bg-blue-600 text-white text-center py-16 px-6">
          <div>
              <h1 className="text-4xl font-bold mt-6">Study MBBS Abroad</h1>
              <p className="mt-6 text-lg">
                  Studying MBBS abroad opens doors to world-class medical education, helping you build a solid foundation for a successful career in medicine. With access to internationally recognized institutions, diverse learning experiences, and clinical exposure, this is your opportunity to gain the knowledge, skills, and global network required to make a meaningful impact in healthcare. Start your journey toward becoming a highly skilled medical professional today!
              </p>
          </div>
          <div>
            <Link to="form" smooth={true} duration={900}>
                <button className="mt-6 bg-yellow-400 text-blue-800 px-6 py-2 rounded-lg font-semibold">
                    Apply Now
                </button>
            </Link>
        </div>
      </div>
  
      {/* Right side: Carousel */}
      <div className="w-1/2 flex items-center">
          <div className="carousel w-full">
              {/* First image */}
              <div id="slide1" className="carousel-item relative w-full">
                  <img src={img1} className="w-full" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide3" className="btn btn-circle">❮</a>
                      <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
              </div>
  
              {/* Second image */}
              <div id="slide2" className="carousel-item relative w-full">
                  <img src={img2} className="w-full" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide1" className="btn btn-circle">❮</a>
                      <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
              </div>
  
              {/* Third image */}
              <div id="slide3" className="carousel-item relative w-full">
                  <img src={img3} className="w-full" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide2" className="btn btn-circle">❮</a>
                      <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
    );
};

export default HeroSection;
