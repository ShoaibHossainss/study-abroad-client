
import { useForm } from "react-hook-form";

const LeadForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <div>
        <h3 className="text-3xl font-semibold text-center mb-6">Get in Touch</h3>

         <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium">Name</label>
        <input
          id="name"
          type="text"
          {...register("name", { 
            required: "Name is required", 
            minLength: { value: 3, message: "Name must be at least 3 characters" },
            maxLength: { value: 50, message: "Name cannot be longer than 50 characters" }
          })}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { 
            required: "Email is required", 
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email" }
          })}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      {/* Phone Input */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-lg font-medium">Phone</label>
        <input
          id="phone"
          type="tel"
          {...register("phone", { 
            required: "Phone number is required", 
            minLength: { value: 10, message: "Phone number must be at least 10 digits" },
            maxLength: { value: 15, message: "Phone number cannot be longer than 15 digits" }
          })}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md"
        />
        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
      </div>

      {/* Country Preference Input*/}
      <div className="mb-6">
        <label htmlFor="country" className="block text-lg font-medium">Country Preference</label>
        <select
          id="country"
          {...register("country", { required: "Please select a country" })}
          className="w-full p-3 mt-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Country</option>
          <option value="Russia">Russia</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Philippines">Philippines</option>
          <option value="Georgia">Georgia</option>
          <option value="Egypt">Egypt</option>
        </select>
        {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button 
          type="submit" 
          className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
        >
          Submit
        </button>
      </div>
    </form>
    </div>

   
  );
};

export default LeadForm;
