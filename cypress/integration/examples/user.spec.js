import * as yup from 'yup'

const user = yup.object().shape({
    name: yup
        .string()
        .min(5, "name must be at least 5 characters")
        .required("Lambdy Pizzy"),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], "Pizza Size required!"),
    special: yup
        .string()
        .min(0, "Tell Us How To Make It")
})

export default user