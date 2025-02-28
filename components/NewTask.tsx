import { useState } from "react";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewTaskForm } from "@/src/types/forms";
import { NewTaskSchema } from "@/src/lib/validation";
import useToggleColor from "@/src/store/toggleColor";

type TNewTask = {
  refAddNewTask: React.RefObject<HTMLDivElement>;
};

const NewTask = ({ refAddNewTask }: TNewTask) => {
  const {
    register,
    formState: { errors },
  } = useForm<NewTaskForm>({
    resolver: yupResolver(NewTaskSchema),
  });
  const [selectedOption, setSelectedOption] = useState("");
  const isOn = useToggleColor((state) => state.isOn);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="fixed inset-0 flex h-full items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className={`${isOn ? "bg-Neutral-Primary" : "bg-foreground"} flex w-[350px] flex-col rounded-lg px-6 py-6 sm:w-[450px] lg:w-[500px]`}
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        ref={refAddNewTask}
      >
        <div
          className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} text-lg font-medium md:font-semibold`}
        >
          Add New Task
        </div>

        <form
          className={`${isOn ? "text-Neutral-Secondary" : "text-Neutral-Primary"} flex flex-col gap-y-5 py-3`}
        >
          <div className="flex flex-col gap-y-1">
            <label htmlFor="title" className="text-xs">
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. Start learning Things"
              {...register("title", { required: true })}
              className={`${isOn ? "bg-Neutral-Primary" : "border-gray-600 bg-foreground"} w-full rounded-md border-[1px] p-2 placeholder:text-xs placeholder:text-gray-500 focus:outline-none`}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="description" className="text-xs">
              Description (optional)
            </label>
            <textarea
              placeholder="e.g. Start learning Things"
              {...register("description", { required: true })}
              className={`${isOn ? "bg-Neutral-Primary" : "border-gray-600 bg-foreground"} w-full rounded-md border-[1px] p-2 placeholder:text-xs placeholder:text-gray-500 focus:outline-none`}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="subtask" className="text-xs">
              Subtasks
            </label>
            <div className="flex justify-between">
              <input
                type="text"
                {...register("subtask", { required: true })}
                className={`${isOn ? "bg-Neutral-Primary" : "border-gray-600 bg-foreground"} w-64 rounded-md border-[1px] p-2 focus:outline-none sm:w-[350px] lg:w-96`}
              />
              <Button>
                <svg
                  width="15"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#828FA3"
                >
                  <g fillRule="evenodd">
                    <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"></path>
                    <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"></path>
                  </g>
                </svg>
              </Button>
            </div>
            {errors.subtask && (
              <p className="mt-1 text-sm text-red-600">
                {errors.subtask.message}
              </p>
            )}
          </div>

          <Button
            className={`${isOn ? "bg-Neutral-forth" : "bg-Neutral-Primary"} text-md w-full transform rounded-3xl font-semibold text-Primary-button transition-all duration-300 ease-in-out hover:scale-105`}
            size="lg"
          >
            + Add New Subtask
          </Button>

          <div className="flex flex-col gap-y-1">
            <label
              htmlFor="status"
              className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"}`}
            >
              Status
            </label>

            <div className="relative text-xs">
              <select
                id="column"
                value={selectedOption}
                {...register("status", {
                  required: true,
                  onChange: (e) => handleChange(e),
                })}
                className={`${isOn ? "bg-Neutral-Primary" : "border-gray-600 bg-foreground"} group w-full cursor-pointer appearance-none rounded-md border-[1px] p-2 shadow-2xl shadow-Primary-buttonDark hover:border-Primary-button focus:outline-none`}
              >
                <option value="" disabled hidden>
                  Select Column
                </option>
                <option value="Option 1">todo</option>
                <option value="Option 2">in progress</option>
                <option value="Option 3">done</option>
              </select>
              {errors.status && (
                <span className="text-xs text-red-500">
                  {errors.status.message}
                </span>
              )}
            </div>
          </div>

          <Button
            className="text-md w-full rounded-3xl bg-Primary-button font-semibold text-Neutral-Primary"
            size="lg"
            type="submit"
          >
            Create Task
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default NewTask;
