import { FormControl, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FileUpload from "../../components/FileUpload";
import Location from "../../components/Location";

const MessageForm = ({ onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm();

  const onFormSubmit = (data) => {
    onSubmit(data);
    setValue("text", "");
  };

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleSubmit(onFormSubmit)();
    }
  };

  const handleImageSubmit = (imageURL) => {
    console.log(imageURL);
    setValue("imageURL", imageURL);
  };

  const handleLocation = (location) => {
    setValue("location", location);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-2">
        <FormControl type="text" placeholder="Ваше имя" {...register("name")} />
      </div>
      <div className="mb-2">
        <FormControl
          as="textarea"
          placeholder="Введеите ваше сообщение"
          {...register("text")}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="mb-2">
        <FileUpload onUpload={handleImageSubmit} />
      </div>
      <div className="mb-2">
        <Location onLocation={handleLocation} {...register("location")} />
      </div>
      <Button>Отправить</Button>
    </form>
  );
};

export default MessageForm;
