import { getDocuments } from "@/lib/doc";
import { getDocumentByTag } from "@/utils/doc-util";
import ContentDisplay from "@/components/ContentDisplay";

export default function TagsPage({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocs = getDocumentByTag(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
}
