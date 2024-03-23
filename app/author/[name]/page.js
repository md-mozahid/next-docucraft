import { getDocuments } from "@/lib/doc";
import { getDocumentByAuthor } from "@/utils/doc-util";

import ContentDisplay from "@/components/ContentDisplay";

export default function AuthorPage({ params: { name } }) {
  const docs = getDocuments()
  const matchedDocs = getDocumentByAuthor(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
}
