import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
export default async function EditSnippetPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) return notFound();

  return (
    <div>
      {snippet.title}
      {/* {snippet.code} */}
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
