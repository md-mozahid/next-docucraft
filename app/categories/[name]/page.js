import { getDocuments } from "@/lib/doc";
import { getDocumentByCategory } from "@/utils/doc-util";
import ContentDisplay from "@/components/ContentDisplay";

export default function CategoriesPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocs = getDocumentByCategory(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
}
