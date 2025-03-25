import * as yup from 'yup'

export const EditFormSchema = yup.object().shape({
  boradName: yup
    .string()
    .required('Board Name is required')
    .max(10, 'Board Name must be less than 10 characters'),
  boradColmn: yup
    .array()
    .of(
      yup.object().shape({
        name: yup
          .string()
          .required('Column name is required')
          .max(15, 'Column name must be less than 15 characters')
      })
    )
    .required('Board Column is required')
    .max(50, 'Board Column must be less than 50 characters')
})

export const NewTaskSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .max(15, 'Title must be less than 15 characters'),
  description: yup
    .string()
    .required('Description is required')
    .max(500, 'Description must be less than 50 characters'),
  status: yup
    .string()
    .required('Status is required')
    .test('valid-status', 'Invalid status', function (value) {
      const { selectedBoardColumn } = this.options.context || {}
      if (!selectedBoardColumn) return false // No columns available
      return selectedBoardColumn.some(
        (column: { name: string }) => column.name === value
      )
    }),
  subtask: yup
    .array()
    .of(
      yup.object().shape({
        title: yup.string().required('Title is required')
      })
    )
    .required('Subtask is required')
    .min(1, 'At least one subtask is required')
    .max(15, 'Subtask must be less than 15 characters')
})

export const AddNewBoardFormSchema = yup.object().shape({
  boradName: yup
    .string()
    .required('Board Name is required')
    .max(10, 'Board Column must be less than 10 characters'),
  boradColmn: yup
    .array()
    .of(
      yup.object().shape({
        name: yup
          .string()
          .required('Column name is required')
          .max(15, 'Column name must be less than 15 characters')
      })
    )
    .required('Board Column is required')
})

export const SignUp = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Invalid Name'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
})
