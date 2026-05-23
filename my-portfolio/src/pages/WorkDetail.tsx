import { useParams } from "react-router-dom";

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <section>
      <h1>Work Detail: {id}</h1>
    </section>
  );
}
