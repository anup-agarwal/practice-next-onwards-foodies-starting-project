"use client"
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null)
  const ref = useRef()

  return <div className={classes["picker"]}>
    <label htmlFor="name">{label}</label>
    <div className={classes["controls"]}>
      <div className={classes["preview"]}>
        {!pickedImage && <p>No image picked yet.</p>}
        {pickedImage && <Image src={pickedImage} fill alt="Image selected by the user" />}
      </div>
      <input
        className={classes["input"]}
        type="file"
        id="name"
        accept="image/png, image/jpeg"
        name={name}
        hidden
        ref={ref}
        onChange={e => {
          const file = e.target.files[0];
          if (!file) {
            setPickedImage(null)
            return
          }
          const fileReader = new FileReader()
          fileReader.onload = () => {
            setPickedImage(fileReader.result)
          }
          fileReader.readAsDataURL(file)
        }}
        required
      />
      <button className={classes["button"]} type="button" onClick={_ => ref.current.click()}>Pick an Image</button>
    </div>
  </div>;
}

export default ImagePicker;