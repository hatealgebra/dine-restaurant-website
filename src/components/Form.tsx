import { Controller, useForm } from "react-hook-form";
import Button from "./Button";
import Counter from "./booking/inputs/Counter";
import Dropdown from "./booking/inputs/Dropdown";
import TextInput from "./booking/inputs/TextInput";

const Form = () => {
  const {
    handleSubmit,
    control,
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
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      className="bg-white z-10 shadow-drop leading-[1.4] h-fit p-[3.2rem] flex flex-col gap-y-[2.4rem] mx-auto mt-10 relative max-w-[540px] row-span-2 tablet:mt-0 desktop:mx-0 desktop:p-[4.8rem] desktop:max-h-[560px]"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <Controller
        control={control}
        name="name"
        render={({ field }) => <TextInput placeholder="Name" {...field} />}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => <TextInput placeholder="Email" {...field} />}
      />
      <div className="tablet:flex items-center gap-[6.6rem]">
        <label className="text-[2rem]  min-w-max" htmlFor="">
          Pick a date
        </label>
        <div className="flex gap-[1.4rem]">
          <Controller
            control={control}
            name="date.month"
            render={({ field }) => <TextInput placeholder="MM" {...field} />}
          />
          <Controller
            control={control}
            name="date.day"
            render={({ field }) => <TextInput placeholder="DD" {...field} />}
          />
          <Controller
            control={control}
            name="date.year"
            render={({ field }) => <TextInput placeholder="YYYY" {...field} />}
          />
        </div>
      </div>
      <div className="tablet:flex items-center gap-[6.6rem]">
        <label className="text-[2rem] min-w-max" htmlFor="">
          Pick a time
        </label>
        <div className="flex gap-[1.4rem]">
          <Controller
            control={control}
            name="time.hour"
            render={({ field }) => <TextInput placeholder="09" {...field} />}
          />
          <Controller
            control={control}
            name="time.minute"
            render={({ field }) => <TextInput placeholder="00" {...field} />}
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
      <Button tailwind="bg-black w-full px-2 hover:border-1 hover:border-black">
        Make reservation
      </Button>
    </form>
  );
};

export default Form;
