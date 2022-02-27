import { FieldErrors, useForm } from "react-hook-form";

// Better errors (set, clear, display)
// Have control over inputs

interface LoginForm {
    username: string,
    password: string,
    email: string
}

export default function Forms() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({ mode: "onChange" });
    const onValid = (data: LoginForm) => {
        console.log(`onValid`);

    }
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);

    }

    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input {...register("username",
                {
                    required: "Username is required",
                    minLength: {
                        value: 5,
                        message: "The Username should be longer than 5 chars.",
                    }
                }
            )}
                type="text" placeholder="Username" />
            {errors.username?.message}
            <input {...register("email",
                {
                    required: "Email is required",
                    validate: {
                        notFacebook: (value) => !value.includes("facebook.com") || "Facebook is not allowed ",
                    }
                }
            )}
                type="email" placeholder="Email" />
            {errors.email?.message}
            <input {...register("password",
                { required: "Password is required" }
            )}
                type="password" placeholder="Password" />
            <input type="submit" value={"Create Account"} />
            {errors.password?.message}
        </form>
    )

}