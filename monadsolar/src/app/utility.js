"use server";
import { TextareaAutosize } from "@mui/material";
import { revalidateTag } from "next/cache";
export const saveEditedBlog = async (id, title, descriptionValue) => {
  try {
    const requestOptions = {
      method: "PATCH",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: descriptionValue,
      }),
    };

    const response = await fetch(
      `http://localhost:3001/blogs/${id}`,
      requestOptions
    );
    revalidateTag("edit-id");

    if (response.ok) {
    } else {
      console.error("Failed to update blog");
    }
  } catch (error) {
    console.error("Error updating blog:", error);
  }
};

export const deleteBlog = async (id) => {
  try {

    console.log(id, 'dosao u id')
    const res = await fetch(`http://localhost:3001/blogs/${id}`, {
      method: "DELETE",
    });

    revalidateTag('delete-blog')

    return res.message
  } catch (error) {
    console.log(error);
  }
};




export const saveBlog = async (title, desc, image) => {
  try {
      const response = await fetch( `http://localhost:3001/blogs/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: desc,
          image: "", 
        }),
      });
      revalidateTag(['add-blog'])

      if (response.ok) {
        const { id } = await response.json();
        return id ;
      } else {
        console.error('Failed to save blog');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    }
};
