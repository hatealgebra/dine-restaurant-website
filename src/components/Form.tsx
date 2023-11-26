import { Controller, useForm } from "react-hook-form";
import Button from "./Button";
import Counter from "./booking/inputs/Counter";
import Dropdown from "./booking/inputs/Dropdown";
import TextInput from "./booking/inputs/TextInput";
import { useState } from "react";

const errorMessages = {
  required: "This field is required",
  incomplete: "This field is incomplete",
  namePattern: "Please enter a valid full name",
  emailPattern: "Please use a valid email address",
  requiredDateTime: "This field is incomplete",
  datePattern: "Please enter a valid date",
  numberLengthTwo: "Please enter a number with two digits",
};

const Form = () => {
  const [formSent, setFormSent] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      date: {
        month: "",
        day: "",
        year: "",
      },
      time: {
        hour: "",
        minute: "",
        twelveHour: "AM",
      },
      guests: 4,
      honeyPot: false,
    },
  });

  const hasDateError =
    errors?.date?.day || errors?.date?.month || errors?.date?.year;

  const hasTimeError = errors?.time?.hour || errors?.time?.minute;

  const onSubmit = (data: any) => {
    if (data.honeyPot) return;
    setFormSent(true);
  };

  return (
    <form
      className="bg-white z-10 shadow-drop leading-[1.4] h-fit p-[3.2rem] flex flex-col gap-y-[2.4rem] w-[90%] mx-auto mt-20 relative max-w-[540px] row-[3/5] col-[1/2] mb-[8.6rem]
      tablet:mt-[3.8rem] tablet:w-full tablet:mb-[12rem]
      desktop:mx-0 desktop:p-[4.8rem]  desktop:mb-0 desktop:col-[2/3] desktop:row-[2/5] desktop:mt-[15.3rem] desktop:mr-[11.5vw]"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <Controller
        control={control}
        name="name"
        rules={{
          required: errorMessages.required,
          pattern: {
            value: /^[a-zA-Z]+ [a-zA-Z]+$/,
            message: errorMessages.namePattern,
          },
        }}
        render={({ field }) => (
          <TextInput
            placeholder="Name"
            errorMessage={errors?.name?.message}
            showMessage
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: errorMessages.required,
          pattern: {
            value: /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,5}/g,
            message: errorMessages.emailPattern,
          },
        }}
        render={({ field }) => (
          <TextInput
            placeholder="Email"
            errorMessage={errors?.email?.message}
            showMessage
            {...field}
          />
        )}
      />
      <div className="tablet:flex items-center gap-[6.6rem]">
        <div className="relative min-w-max">
          <label
            className={`text-[2rem] ${hasDateError && "text-error"}`}
            htmlFor=""
          >
            Pick a date
          </label>
          <span className="absolute  min-w-max left-0 -bottom-4 text-error text-[1rem] leading-[1rem] inline-block">
            {hasDateError && errorMessages.requiredDateTime}
          </span>
        </div>
        <div className="flex gap-[1.4rem]">
          <Controller
            control={control}
            name="date.month"
            rules={{
              required: errorMessages.requiredDateTime,
              pattern: {
                value: /^[0-1]{1}[0-2]{1}$/,
                message: errorMessages.numberLengthTwo,
              },
            }}
            render={({ field }) => (
              <TextInput
                placeholder="MM"
                error={errors.name}
                rules={{
                  required: errorMessages.requiredDateTime,
                  pattern: {
                    value: /^[0-1]{1}[0-2]{1}$/,
                    message: errorMessages.numberLengthTwo,
                  },
                }}
                errorMessage={errors?.date?.month?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="date.day"
            rules={{
              required: errorMessages.requiredDateTime,
              pattern: {
                value: /^([1|2]{1}[0-9]{1})|30|31$/,
                message: errorMessages.numberLengthTwo,
              },
            }}
            render={({ field }) => (
              <TextInput
                placeholder="DD"
                errorMessage={errors?.date?.day?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="date.year"
            rules={{
              required: errorMessages.requiredDateTime,
              pattern: {
                value: /^2[0-9]{3}$/,
                message: errorMessages.numberLengthTwo,
              },
            }}
            render={({ field }) => (
              <TextInput
                placeholder="YYYY"
                errorMessage={errors?.date?.year?.message}
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className="tablet:flex items-center gap-[6.6rem]">
        <div className="relative min-w-max">
          <label
            className={`text-[2rem] ${hasTimeError && "text-error"}`}
            htmlFor=""
          >
            Pick a time
          </label>
          <span className="absolute min-w-max left-0 -bottom-4 text-error text-[1rem] leading-[1rem] inline-block">
            {hasTimeError && errorMessages.requiredDateTime}
          </span>
        </div>
        <div className="flex gap-[1.4rem]">
          <Controller
            control={control}
            name="time.hour"
            rules={{
              required: errorMessages.requiredDateTime,
              pattern: {
                value: /^[0 | 1]{1}[0-9]{1}$/,
                message: errorMessages.numberLengthTwo,
              },
            }}
            render={({ field }) => (
              <TextInput
                placeholder="09"
                errorMessage={errors?.time?.hour?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="time.minute"
            rules={{
              required: errorMessages.requiredDateTime,
              pattern: {
                value: /^[0 | 1]{1}[0-9]{1}$/,
                message: errorMessages.numberLengthTwo,
              },
            }}
            render={({ field }) => (
              <TextInput
                placeholder="00"
                errorMessage={errors?.time?.minute?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="time.twelveHour"
            render={({ field }) => (
              <Dropdown options={["AM", "PM"]} {...field} />
            )}
          />
        </div>
      </div>
      <Controller
        control={control}
        name="guests"
        render={({ field }) => <Counter {...field} />}
      />
      <input className="hidden" type="checkbox" {...register("honeyPot")} />
      <Button tailwind="bg-black w-full px-2 hover:border-1 hover:border-black">
        Make reservation
      </Button>
      {formSent && (
        <div className="absolute inset-0 bg-white bg-opacity-90 flex justify-center items-center">
          <div className="flex flex-col items-center gap-y-[2.4rem]">
            <h2 className="text-[2.4rem] font-bold">
              Thanks for your request!
            </h2>
            <p className="text-[1.6rem] text-center">
              We will contact you within 24 hours to confirm your reservation.
            </p>
            <Button
              tailwind="bg-black w-full px-2 hover:border-1 hover:border-black"
              onClick={() => setFormSent(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
