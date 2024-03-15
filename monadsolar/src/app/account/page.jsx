"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter, useSearchParams } from "next/navigation"; // Import useRouter from next/router
import Editor from "@/components/Editor/Editor";
import styles from "./account.module.css";
import EditorPreview from "@/components/EditorPreview/page";
import { blogData } from "../BlogData/BlogData";

const Account = () => {
  const router = useRouter();
  const searchParams = useSearchParams()

  console.log({searchParams}, searchParams.get('id'))
  const [editData, setEditData] = useState('');
  console.log(localStorage.getItem("blogData"))
 
  useEffect(() => {
    const storedData = localStorage.getItem("blogData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setEditData(parsedData);
      setDescriptionValue(parsedData.description);
      setBlogData((prevData) => ({
        ...prevData,
        title: parsedData.title,
        image: parsedData.image,
      }));

      console.log()
    }
  }, []);


  const [data, setBlogData] = useState({
    image: "",
    title: "",
    date: "",
    description: "",
  });

  const [descriptionValue, setDescriptionValue] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...data, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBlogData({ ...data, image: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const saveBlog = () => {
    const id1 = uuidv4();
    let existingBlogIndex = -1;

    if (editData && editData.id) {
      existingBlogIndex = blogData.findIndex((blog) => blog.id === editData.id);
    }

    if (!data.title || !data.image || !descriptionValue) {
      alert("Title, cover image, and description are required!");
      return;
    }

    if (existingBlogIndex !== -1) {
      blogData[existingBlogIndex] = {
        ...data,
        id: editData.id,
        description: descriptionValue,
        date: Date(),
      };
    } else {
      blogData.push({
        ...data,
        id: id1,
        description: descriptionValue,
        date: Date(),
      });
    }

    router.push(`/blog/${existingBlogIndex !== -1 ? editData.id : id1}`); // Use router.push for navigation
  };

  return (
    <div className="layout">
      <div className="middle">
        <h2>{editData ? "Edit Blog" : "Create New Blog"}:</h2>
        <div className={styles.container}>
          <div className={styles.form_container}>
            <div className={styles.form_input}>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleInputChange}
              />

              <label>Import Cover Image:</label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            {data.image && <div>Cover image already selected</div>}
            <Editor
              value={descriptionValue}
              setValue={setDescriptionValue}
              saveBlog={saveBlog}
            />
          </div>
          <EditorPreview value={descriptionValue} />
        </div>
      </div>
    </div>
  );
};

export default Account;
