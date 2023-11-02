
const validEmail = (email: string): email is `${string}@${string}.${string}` => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};


export const SignUpSchema = 
export const validateSignUp = (formData: FormData): [success: boolean, errors?: FormErrors] => {
  const errors: FormErrors = {}

  const email = formData.get("email")?.toString()
  if(!email || !validEmail(email)) {
    errors.email = "Please enter a valid email address."
  }

  return [Object.keys(errors).length === 0, errors]
}

