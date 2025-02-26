import React from 'react'
import Button from '../ui/Button'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EditForm } from '@/src/types/forms'
import { EditFormSchema } from '@/src/lib/validation'

type TEditBorad = {
  refEdit: React.RefObject<HTMLDivElement>
}

const Editboard = ({ refEdit }: TEditBorad) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EditForm>({
    resolver: yupResolver(EditFormSchema)
  })
  const onSubmit = (data: EditForm) => {
    console.log('Form data submitted:', data)
  }
  return (
    <div className="fixed h-full inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col px-6 bg-foreground w-[350px] sm:w-[450px] lg:w-[500px] rounded-lg py-6"
        ref={refEdit}
      >
        <div className="text-lg text-Neutral-Primary font-semibold">
          Edit Borad
        </div>

        {/* Forms */}
        <form
          className="text-Neutral-Primary pt-1 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="BoardName" className="text-xs">
            Borad Name
          </label>
          <input
            type="text"
            {...register('boradName', { required: true })}
            className="w-full p-2 rounded-md bg-foreground border-[1px] border-gray-600 focus:outline-none"
          />
          {errors.boradName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.boradName.message}
            </p>
          )}
          <div className="pt-4 pb-3">
            <label htmlFor="BoradColumn" className="text-xs">
              Borad Column
            </label>

            <div className="space-y-4">
              <div className="flex justify-between">
                <input
                  type="text"
                  {...register('boradColmn', { required: true })}
                  className="w-64 sm:w-[350px] lg:w-96 p-2 rounded-md bg-foreground border-[1px] border-gray-600 focus:outline-none"
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
              {errors.boradColmn && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.boradColmn.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-y-4 ">
            <Button
              className="bg-Neutral-Primary text-Primary-button rounded-3xl w-full font-semibold"
              size="lg"
            >
              + Add New Column
            </Button>
            <Button
              variant="button"
              className="rounded-3xl w-full font-semibold"
              size="lg"
              type="submit"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Editboard
