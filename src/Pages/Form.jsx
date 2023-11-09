import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(parseInt(data.one) + parseInt(data.two));
  const onError = (errors, e) => console.log(errors, e);
  console.log()
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register('one')} />
      <input {...register('two')} />
      <button type="submit">Submit</button>
    </form>
  );
}