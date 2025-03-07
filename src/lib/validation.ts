import * as yup from 'yup'

export const EditFormSchema = yup.object().shape({
  boradName: yup
    .string()
    .required('Board Name is required')
    .max(50, 'Board Name must be less than 50 characters'),
  boradColmn: yup
    .string()
    .required('Board Column is required')
    .max(50, 'Board Column must be less than 50 characters')
})

export const NewTaskSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .max(50, 'Title must be less than 50 characters'),
  description: yup
    .string()
    .required('Description is required')
    .max(50, 'Description must be less than 50 characters'),
  subtask: yup
    .string()
    .required('Subtask is required')
    .max(50, 'Subtask must be less than 50 characters'),
  status: yup
    .string()
    .required('Status is required')
    .oneOf(['Option 1', 'Option 2', 'Option 3'], 'Invalid status')
})

export const AddNewBoardFormSchema = yup.object().shape({
  boradName: yup.string().required('Board Name is required'),
  boradColmn: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required('Column name is required')
      })
    )
    .required('Board Column is required')
    .max(50, 'Board Column must be less than 50 characters')
})
