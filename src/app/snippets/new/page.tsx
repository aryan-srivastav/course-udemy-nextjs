import { db } from "@/db";
import { redirect } from "next/navigation";
import React from "react";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    //This needs to be a Server Action
    "use server";

    //Check the user's input and make sure they're valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    //create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // console.log(snippet);
    //Redirtect the user back to the root route
    redirect("/");
  }
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        {/* ServerActions is called when submit is clicked automatically  */}
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
