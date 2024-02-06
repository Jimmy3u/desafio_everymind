import { Button } from "@hilla/react-components/Button.js";
import { Dialog } from "@hilla/react-components/Dialog.js";
import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { Icon } from "@hilla/react-components/Icon.js";
import { AutoForm } from "@hilla/react-crud";
import ProductModel from "Frontend/generated/com/everymind/nunes/models/ProductModel";
import ProductRecord from "Frontend/generated/com/everymind/nunes/services/ProductListingService/ProductRecord";
import { ProductListingService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
import ProductEdit from "./ProductEditForm";

function formatPrice({ item: ProductRecord }: { item: ProductRecord }) {
  return <span>R$ {ProductRecord.productPrice.toFixed(2)}</span>;
}

export default function ProductListingView() {
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [selected, setSelected] = useState<ProductRecord | null | undefined>();
  const [dialogOpened, setDialogOpened] = useState(false);

  useEffect(() => {
    ProductListingService.findAllProducts().then(setProducts);
  }, []);

  async function ProductDelete(id: number) {
    await ProductListingService.deleteProduct(id);
    // Atualizando a força, porque ainda não sei como fazer isso de forma mais eficiente
    ProductListingService.findAllProducts().then(setProducts);
  }
  async function onContactSaved(product: ProductRecord) {
    const saved = await ProductListingService.updateProduct(product);
    if (product.id) {
      setProducts((products) =>
        products.map((current) => (current.id === saved.id ? saved : current))
      );
    } else {
      setProducts((products) => [...products, saved]);
    }
    setSelected(saved);
  }

  async function onProductSave(product: ProductRecord) {
    const saved = await ProductListingService.saveProduct(product);
    setProducts((products) => [...products, saved]);
  }

  const onCreate = () => {
    ProductListingService.findAllProducts().then(setProducts);
    setDialogOpened(false);
  };

  return (
    <>
      <div className="p-m gap-m">
        <Button onClick={() => setDialogOpened(true)}>Adicionar Produto</Button>
      </div>
      <div className="p-m flex gap-m">
        <Grid
          items={products}
          onActiveItemChanged={(e) => setSelected(e.detail.value)}
          selectedItems={[selected]}
        >
          <GridColumn path="id" autoWidth flexGrow={0} />
          <GridColumn path="productName" header="Produto" />
          <GridColumn path="productDesc" header="Descrição" autoWidth />
          <GridColumn header="Preço">{formatPrice}</GridColumn>
          <GridColumn flexGrow={0}>
            {({ item: ProductRecord }: { item: ProductRecord }) => (
              <Button
                theme="icon tertiary-inline"
                onClick={() => ProductDelete(ProductRecord.id)}
              >
                <Icon icon="vaadin:trash" /> Delete
              </Button>
            )}
          </GridColumn>
        </Grid>
        {selected && (
          <ProductEdit product={selected} onSubmit={onContactSaved} />
        )}
      </div>

      <Dialog
        header-title="Adicionando novo produto"
        opened={dialogOpened}
        onOpenedChanged={({ detail }) => setDialogOpened(detail.value)}
      >
        <AutoForm
          service={ProductListingService}
          model={ProductModel}
          onSubmitSuccess={onCreate}
        />
      </Dialog>
    </>
  );
}
