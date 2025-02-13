import russia from '../assets/russia-flag-png-large.png';
import uzbekistan from '../assets/uzbekistan-flag-png-large.png';
import kazakhstan from '../assets/kazakhstan-flag-png-large.png';
import philippines from '../assets/philippines-flag-png-large.png';
import georgia from '../assets/georgia-flag-jpg-xl.jpg';
import kyrgyzstan from '../assets/kyrgyzstan-flag-png-large.png';
import egypt from '../assets/egypt-flag-png-large.png';

const Countries = () => {
    return (
        
      <div>
        <h2 className='text-3xl font-semibold text-center mb-6'>Best Countries To Pursue Your MBBS Degree</h2>
          <div className='grid grid-cols-3 gap-6 mt-6 ml-5'>
          <div className="card bg-base-100  w-96 shadow-xl ">
  <figure>
    <img
      src={russia}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className='font-semibold text-lg'>Russia is home to many prestigious medical universities with globally recognized degrees. The country offers affordable tuition fees, high-quality education, and well-established hospitals for hands-on clinical training. Medical schools in Russia are renowned for their cutting-edge research facilities and experienced faculty members.</p>
  </div>
  </div>  
          <div className="card bg-base-100  w-96 shadow-xl">
  <figure>
    <img 
      src={uzbekistan}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className='font-semibold text-lg'>Uzbekistan has become a popular destination for MBBS students due to its cost-effective education system. Medical universities in Uzbekistan offer excellent English-medium programs, globally recognized degrees, and the opportunity to gain practical clinical experience at local and international medical institutions.</p>
  </div>
  </div>  
          <div className="card bg-base-100  w-96 shadow-xl">
  <figure >
    <img
      src={kazakhstan}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className='font-semibold text-lg'>Kazakhstan boasts a growing number of high-ranking medical universities that offer modern facilities and diverse research opportunities. With an affordable cost of living and medical programs in English, Kazakhstan is a great option for international students seeking quality medical education without high costs.</p>
  </div>
  </div>  
          <div className="card bg-base-100  w-96 shadow-xl">
  <figure className=''>
    <img
      src={philippines}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className='font-semibold text-lg'>The Philippines is known for offering affordable, high-quality medical education in English. Many universities in the Philippines are accredited by international medical bodies, and the country has a large number of hospitals where students gain practical exposure. The country's welcoming environment makes it an attractive destination for international students.</p>
  </div>
  </div>  
          <div className="card bg-base-100  w-96 shadow-xl">
  <figure>
    <img
      src={georgia}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className='font-semibold text-lg'>Georgia offers high-quality medical programs at a fraction of the cost of Western institutions. The country is home to universities that offer degrees recognized by international medical organizations. Georgia provides students with the opportunity to study in a culturally rich environment while gaining practical experience in well-equipped healthcare facilities.</p>
  </div>
  </div>  
          <div className="card bg-base-100  w-96 shadow-xl">
  <figure className=''>
    <img
      src={kyrgyzstan}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className='font-semibold text-lg'>Kyrgyzstan is an emerging destination for MBBS students due to its affordable tuition fees and internationally recognized medical degrees. Students benefit from studying in English-medium programs, modern campuses, and gaining clinical exposure in a range of medical institutions, all while enjoying a low cost of living.</p>
  </div>
  </div>  
          <div className="card bg-base-100  w-96 shadow-xl">
  <figure className=''>
    <img
      src={egypt}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className='font-semibold text-lg'>Egypt is home to some of the most prestigious medical schools in Africa, offering internationally recognized degrees. The country combines rich cultural heritage with modern medical education, making it an ideal choice for students who want to study in a diverse environment. Egypt offers excellent clinical training opportunities and a chance to engage in research in various medical fields.</p>
  </div>
  </div>  
    </div>
      </div>
    );
};

export default Countries;
