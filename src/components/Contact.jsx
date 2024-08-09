import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const messageSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().min(30).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(messageSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://my-brand-backend-ibtm.onrender.com/api/messages/createMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Thanks, your message was sent successfully!");
      } else {
        toast.error("Failed to submit message");
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("An error occurred while sending the message.");
    }
  };

  return (
    <div className="pt-24 pb-24 bg-black px-4 md:px-16 lg:px-24" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-primary text-2xl font-semibold mb-6">
            CONTACT ME
          </h3>
          <div className="flex flex-col gap-2">
            <span>
              <span className="text-primary pr-3 text-lg">
                <i class="fa-solid fa-location-dot text-xl pr-2"></i> My
                Location
              </span>
              KN 173 st 24
            </span>
            <span>
              <span className="text-primary pr-3 text-lg">
                <i class="fa-solid fa-phone text-xl pr-2"></i>Contact
              </span>
              +250 781530573
            </span>
            <span>
              <span className="text-primary pr-3 text-lg">
                <i class="fa-regular fa-envelope text-xl pr-2"></i> Email
              </span>
              ismaelmurekezi1@gmail.com
            </span>
          </div>
        </div>
        <form
          className="flex flex-col gap-4 max-w-lg w-full mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full py-3 border-[1px] border-primary bg-transparent rounded-lg px-4"
              id="contact-name"
              {...register("name")}
            />
            <small className="text-red-500">{errors.name?.message}</small>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-full py-3 border-[1px] border-primary bg-transparent rounded-lg px-4"
              id="contact-email"
              {...register("email")}
            />
            <small className="text-red-500">{errors.email?.message}</small>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Enter your message"
              className="w-full h-60 py-3 border-[1px] border-primary bg-transparent rounded-lg px-4"
              id="contact-message"
              {...register("message")}
            />
            <small className="text-red-500">{errors.message?.message}</small>
          </div>
          <button
            className="w-full py-3 border-[1px] bg-primary text-white font-medium text-xl border-primary rounded-lg"
            id="submit-btn"
          >
            SEND MESSAGE
          </button>
          <span id="submit-error"></span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
