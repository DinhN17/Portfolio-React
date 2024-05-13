import { useForm } from "react-hook-form";

export default function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleContact = data => console.log(data);
    const handleError = (errors) => {};

    const contactOptions = {
        name: { required: "Name is required" },
        email: { 
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/i,
            message: "Invalid email address" } 
        },
        message: { required: "Message is required" }
    };
    
    return (
        <section>
            <form className="d-flex flex-column form-group" onSubmit={handleSubmit(handleContact, handleError)}>
                <h4>Contact Me</h4>
                <label htmlFor="inputdefault">Name:</label>
                <input className="form-control" type="text" {...register("name", contactOptions.name)} />
                <label htmlFor="inputdefault">Email address:</label>
                <input className="form-control" type="email" {...register("email", contactOptions.email)} />
                <label htmlFor="inputdefault">Message:</label>
                <textarea {...register("message", contactOptions.message)} />

                <small className="text-danger">
                    {errors?.name && errors.name.message}
                    {!errors?.name && errors?.email && errors.email.message}
                    {!errors?.name && !errors?.email && errors?.message && errors.message.message}
                </small>
                <input className="btn" type="Submit" />
            </form>
        </section>
    );
}