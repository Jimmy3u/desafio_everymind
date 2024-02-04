import { Button } from "@hilla/react-components/Button.js";
import { Dialog } from "@hilla/react-components/Dialog.js";
import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { Icon } from "@hilla/react-components/Icon.js";
import ProductRecord from "Frontend/generated/com/everymind/nunes/services/ProductListingService/ProductRecord";
import { ProductListingService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";

function formatPrice({ item: ProductRecord }: { item: ProductRecord }) {
  return <span>R$ {ProductRecord.productPrice.toFixed(2)}</span>;
}


export default function ProductListingView() {
  const [products, setProducts] = useState<ProductRecord[]>([]);

  useEffect(() => {
    ProductListingService.findAllProducts().then(setProducts);
  }, []);


  async function onProductDelete(id: number){
    await ProductListingService.deleteProduct(id);
    // Atualizando a força, porque ainda não sei como fazer isso de forma mais eficiente
    ProductListingService.findAllProducts().then(setProducts);
  }
  return (
    <div className="p-m gap-m">
      <Button theme="icon">
        <Icon icon="vaadin:plus" /> Adicionar Produto
      </Button>
      <Grid items={products}>
        <GridColumn path="id" autoWidth flexGrow={0} />
        <GridColumn path="productName" header="Produto" />
        <GridColumn path="productDesc" header="Descrição" autoWidth />
        <GridColumn header="Preço">{formatPrice}</GridColumn>
        <GridColumn flexGrow={0}>
          {({ item: ProductRecord }: { item: ProductRecord }) => (
            <Button theme="icon tertiary-inline">
              <Icon icon="vaadin:edit" /> Edit
            </Button>
          )}
        </GridColumn>
        <GridColumn flexGrow={0}>
          {({ item: ProductRecord }: { item: ProductRecord }) => (
              <Button
              theme="icon tertiary-inline"
              onClick={() => onProductDelete(ProductRecord.id)}
            >
              <Icon icon="vaadin:trash" /> Delete
            </Button>
          )}
        </GridColumn>
      </Grid>
    </div>
  );
}
