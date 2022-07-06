import { useForm } from "react-hook-form";

const MessageForm = ({onSubmit}) => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    onSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <input type="text" placeholder="Ваше имя" {...register("name")} />
      </div>
      <div>
        <textarea
          placeholder="Введеите ваше сообщение"
          {...register("text")}
        ></textarea>
      </div>    
      <button>Отправить</button>
    </form>
  );
};

export default MessageForm;
