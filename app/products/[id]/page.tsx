
const products = [
  { id: 1, name: "Telefon" },
  { id: 2, name: "Kompüter" },
  { id: 3, name: "Planşet" },
  { id: 4, name: "Televizor" }
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>Məhsul tapılmadı!</h1>;
  }

  return (
    <div>
      <h1>Product Page</h1>
      <h2>ID: {product.id}</h2>
      <h2>Ad: {product.name}</h2>
    </div>
  );
}

