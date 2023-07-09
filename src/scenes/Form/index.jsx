import { Box, Button, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { Header } from '../../components/Header';
import { tokens } from '../../theme';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
};

const phoneRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email.').required('required'),
  contact: yup
    .string()
    .matches(phoneRegex, 'Phone number is not valid.')
    .required('required'),
  address1: yup.string().required('required'),
  address2: yup.string().required('required'),
});

export const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery('min-width(600px)');
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const handleFormSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <Box m="20px">
      <Header title="Create User" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              sx={{
                gridColumn: isNonMobile ? 'span 2' : 'span 4',
                '& .MuiFormLabel-root': {
                  color:
                    !errors.firstName &&
                    touched.firstName &&
                    colors.greenAccent[500],
                },
                '& .MuiFilledInput-root:before': {
                  borderBottomColor:
                    !errors.firstName &&
                    touched.firstName &&
                    colors.greenAccent[500],
                },
              }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              sx={{
                gridColumn: isNonMobile ? 'span 2' : 'span 4',
                '& .MuiFormLabel-root': {
                  color:
                    !errors.lastName &&
                    touched.lastName &&
                    colors.greenAccent[500],
                },
                '& .MuiFilledInput-root:before': {
                  borderBottomColor:
                    !errors.lastName &&
                    touched.lastName &&
                    colors.greenAccent[500],
                },
              }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="email"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{
                gridColumn: 'span 4',
                '& .MuiFormLabel-root': {
                  color:
                    !errors.email && touched.email && colors.greenAccent[500],
                },
                '& .MuiFilledInput-root:before': {
                  borderBottomColor:
                    !errors.email && touched.email && colors.greenAccent[500],
                },
              }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Contact Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={touched.contact && Boolean(errors.contact)}
              helperText={touched.contact && errors.contact}
              sx={{
                gridColumn: 'span 4',
                '& .MuiFormLabel-root': {
                  color:
                    !errors.contact &&
                    touched.contact &&
                    colors.greenAccent[500],
                },
                '& .MuiFilledInput-root:before': {
                  borderBottomColor:
                    !errors.contact &&
                    touched.contact &&
                    colors.greenAccent[500],
                },
              }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address 1"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address1}
              name="address1"
              error={touched.address1 && Boolean(errors.address1)}
              helperText={touched.address1 && errors.address1}
              sx={{
                gridColumn: 'span 4',
                '& .MuiFormLabel-root': {
                  color:
                    !errors.address1 &&
                    touched.address1 &&
                    colors.greenAccent[500],
                },
                '& .MuiFilledInput-root:before': {
                  borderBottomColor:
                    !errors.address1 &&
                    touched.address1 &&
                    colors.greenAccent[500],
                },
              }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address 2"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address2}
              name="address2"
              error={touched.address2 && Boolean(errors.address2)}
              helperText={touched.address2 && errors.address2}
              sx={{
                gridColumn: 'span 4',
                '& .MuiFormLabel-root': {
                  color:
                    !errors.address2 &&
                    touched.address2 &&
                    colors.greenAccent[500],
                },
                '& .MuiFilledInput-root:before': {
                  borderBottomColor:
                    !errors.address2 &&
                    touched.address2 &&
                    colors.greenAccent[500],
                },
              }}
            />
          </Box>

          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create New User
            </Button>
          </Box>
        </form>
      </Formik>
    </Box>
  );
};
