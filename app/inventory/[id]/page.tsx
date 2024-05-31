const InventoryDetailPage: React.FC<{ params: { id: string } }> = ({
  params,
}) => {
  return (
    <div>
      <h1>Inventory Detail Page</h1>
      <p>Inventory ID/slug: {params.id}</p>
    </div>
  );
};

export default InventoryDetailPage;
