import ProductRecord from "Frontend/generated/com/everymind/nunes/services/ProductListingService/ProductRecord";
import { useEffect, useState } from "react";
import { useForm } from "@hilla/react-form";
import ProductRecordModel from "Frontend/generated/com/everymind/nunes/services/ProductListingService/ProductRecordModel";
import { Dialog } from "@hilla/react-components/Dialog.js";
import { Button } from "@hilla/react-components/Button.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { NumberField } from "@hilla/react-components/NumberField.js";

interface ProductFormProps {
  product?: ProductRecord | null;
  onSubmit?: (product: ProductRecord) => Promise<void>;
}

export default function ProductEdit({ product, onSubmit }: ProductFormProps) {
  const { field, model, submit, reset, read } = useForm(ProductRecordModel, {
    onSubmit,
  });

  useEffect(() => {
    read(product);
  }, []);

  return (
    <div className="flex flex-col gap-s items-start">
      <TextField label="Product Name" {...field(model.productName)} />
      <TextField label="Product Description" {...field(model.productDesc)} />
      <NumberField label="Product price" {...field(model.productPrice)} />
      <div className="flex gap-s">
        <Button onClick={submit} theme="primary">
          Save
        </Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
}
