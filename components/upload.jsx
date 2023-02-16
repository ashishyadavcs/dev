import { toast } from "react-toastify";

const Upload = () => {
  const uploadimg = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", e.target.file.files[0]);
    const data = await fetch("/api/upload", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .catch((err) => "");
    if (data.success) {
      toast.success("file uploaded!");
    } else {
      toast.error("error occured");
    }
  };
  return (
    <div className="container py-4">
      <form onSubmit={uploadimg}>
        <input accept="image/*" type="file" name="file" />
        <button>upload</button>
      </form>
    </div>
  );
};

export default Upload;
