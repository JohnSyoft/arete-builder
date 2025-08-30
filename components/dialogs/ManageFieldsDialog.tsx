"use client";

import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Collection,
  Field,
  useAddField,
  useUpdateField,
  useRemoveField,
  useCollection,
} from "@/hooks/useCollections";
import { useCollections } from "@/hooks/useCollections";
import { toast } from "sonner";
import { FieldsList, FieldTypeSelector, FieldEditor } from "./manage-fields";
import { useModalStore } from "@/lib/store/modalStore";
import { fieldSchema, type FieldFormData } from "@/lib/validations/fields";

interface ManageFieldsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  collection: Collection;
}

export function ManageFieldsDialog({
  isOpen,
  onClose,
  collection,
}: ManageFieldsDialogProps) {
  const [editingField, setEditingField] = useState<Field | null>(null);
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);

  const addFieldMutation = useAddField();
  const updateFieldMutation = useUpdateField();
  const removeFieldMutation = useRemoveField();
  const { closeModal } = useModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
    reset,
  } = useForm<FieldFormData>({
    resolver: yupResolver(fieldSchema),
    defaultValues: {
      id: "",
      name: "",
      type: "plainText",
      description: "",
      required: false,
      textArea: false,
      localization: false,
      placeholder: "",
      maxLength: "",
      defaultValue: "",
      referenceCollection: "",
      options: [],
    },
  });

  const formData = watch();

  // Get all collections for reference fields
  const { data: allCollectionsResponse } = useCollections(
    collection.project || ""
  );

  // Get fresh collection data to ensure we have the latest fields
  const { data: freshCollectionResponse } = useCollection(collection._id);
  const currentCollection = freshCollectionResponse?.collection || collection;

  // Auto-select first field when dialog opens
  const selectedField = selectedFieldId
    ? currentCollection.fields.find((f: Field) => f.id === selectedFieldId)
    : currentCollection.fields[0];

  // Handle field type selection
  const handleFieldTypeSelect = async (
    fieldType: string,
    referenceCollectionId?: string
  ) => {
    const newFieldId = crypto.randomUUID();
    const newField = {
      id: newFieldId,
      name: `New ${
        fieldType.charAt(0).toUpperCase() + fieldType.slice(1)
      } Field`,
      type: fieldType,
      description: "",
      required: false,
      textArea: false,
      localization: false,
      placeholder: "",
      maxLength: "",
      defaultValue: "",
      referenceCollection: referenceCollectionId || "",
      options: [],
    };

    try {
      // Prepare field data for backend
      let fieldData: any = {
        id: newField.id,
        name: newField.name,
        type: newField.type as Field["type"],
        required: newField.required,
      };

      if (newField.description?.trim()) {
        fieldData.description = newField.description;
      }

      if (newField.placeholder?.trim()) {
        fieldData.placeholder = newField.placeholder;
      }

      if (newField.maxLength && parseInt(newField.maxLength) > 0) {
        fieldData.maxLength = parseInt(newField.maxLength);
      }

      if (newField.defaultValue?.trim()) {
        fieldData.defaultValue = newField.defaultValue;
      }

      if (referenceCollectionId) {
        fieldData.referenceCollection = referenceCollectionId;
      }

      if (newField.options && newField.options.length > 0) {
        fieldData.options = newField.options.map((opt) => ({
          label: opt,
          value: opt,
        }));
      }

      // Add field to backend
      const result = await addFieldMutation.mutateAsync({
        collectionId: collection._id,
        field: fieldData,
      });

      const createdFieldId = result?.data?.field?.id || fieldData.id;

      // Set up form data for immediate editing
      reset({
        ...newField,
        id: createdFieldId,
      });
      setEditingField(null);
      setSelectedFieldId(createdFieldId);

      toast.success("Field added successfully");
    } catch (error) {
      console.error("Failed to add field:", error);
      toast.error("Failed to add field");
    }
  };

  // Update form data when selected field changes
  useEffect(() => {
    if (selectedField) {
      reset({
        id: selectedField.id,
        name: selectedField.name,
        type: selectedField.type,
        description: selectedField.description || "",
        required: selectedField.required || false,
        textArea: selectedField.textArea || false,
        localization: selectedField.localization || false,
        placeholder: selectedField.placeholder || "",
        maxLength: selectedField.maxLength?.toString() || "",
        defaultValue: selectedField.defaultValue || "",
        referenceCollection: selectedField.referenceCollection || "",
        options: selectedField.options?.map((opt: any) => opt.value) || [],
      });
    }
  }, [selectedField, reset]);

  // Auto-select first field when collection changes
  useEffect(() => {
    if (currentCollection.fields.length > 0 && !selectedFieldId) {
      setSelectedFieldId(currentCollection.fields[0].id);
    }
  }, [currentCollection.fields, selectedFieldId]);

  const handleSelectField = (field: Field) => {
    setSelectedFieldId(field.id);
    setEditingField(field);
  };

  const handleDeleteField = async (fieldId: string) => {
    try {
      await removeFieldMutation.mutateAsync({
        collectionId: collection._id,
        fieldId,
      });
      toast.success("Field deleted successfully");

      // Reset selection if deleted field was selected
      if (selectedFieldId === fieldId) {
        setSelectedFieldId(null);
        setEditingField(null);
      }
    } catch (error) {
      toast.error("Failed to delete field");
    }
  };

  const onSubmit = async (data: FieldFormData) => {
    if (!data.name.trim()) {
      toast.error("Field name is required");
      return;
    }

    // Validate reference fields
    if (
      (data.type === "reference" || data.type === "multiReference") &&
      (!data.referenceCollection || data.referenceCollection.trim() === "")
    ) {
      toast.error("Reference fields must specify a reference collection");
      return;
    }

    try {
      // Prepare field data for backend
      let fieldData: any = {
        id: selectedFieldId || editingField?.id || crypto.randomUUID(),
        name: data.name.trim(),
        type: data.type as Field["type"],
        required: data.required,
      };

      if (data.description?.trim()) {
        fieldData.description = data.description;
      }

      if (data.placeholder?.trim()) {
        fieldData.placeholder = data.placeholder;
      }

      if (data.maxLength && parseInt(data.maxLength) > 0) {
        fieldData.maxLength = parseInt(data.maxLength);
      }

      if (data.defaultValue?.trim()) {
        fieldData.defaultValue = data.defaultValue;
      }

      if (data.referenceCollection?.trim()) {
        fieldData.referenceCollection = data.referenceCollection;
      }

      if (data.options && data.options.length > 0) {
        fieldData.options = data.options.map((opt) => ({
          label: opt,
          value: opt,
        }));
      }

      if (selectedFieldId || editingField) {
        await updateFieldMutation.mutateAsync({
          collectionId: collection._id,
          fieldId: selectedFieldId || editingField!.id,
          field: fieldData,
        });
        closeModal();
        toast.success("Field updated successfully");
      } else {
        await addFieldMutation.mutateAsync({
          collectionId: collection._id,
          field: fieldData,
        });
        toast.success("Field added successfully");
        setSelectedFieldId(fieldData.id);
      }
    } catch (error) {
      toast.error(
        selectedFieldId || editingField
          ? "Failed to update field"
          : "Failed to add field"
      );
    }
  };

  const handleCancel = () => {
    if (currentCollection.fields.length > 0) {
      const firstField = currentCollection.fields[0];
      setSelectedFieldId(firstField.id);
      setEditingField(firstField);
    } else {
      setSelectedFieldId(null);
      setEditingField(null);
      reset({
        id: "",
        name: "",
        type: "plainText",
        description: "",
        required: false,
        textArea: false,
        localization: false,
        placeholder: "",
        maxLength: "",
        defaultValue: "",
        referenceCollection: "",
        options: [],
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[1000px] max-h-[80vh] flex flex-col [&>button]:hidden p-0 gap-0">
        <DialogHeader className="border-b border-border py-2 p-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              {currentCollection.name} Fields
              {selectedField && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground font-normal">
                    {selectedField.name}
                  </span>
                </>
              )}
            </DialogTitle>
            <div className="flex items-center gap-2">
              {selectedField && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteField(selectedField.id)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
              <FieldTypeSelector
                onFieldTypeSelect={handleFieldTypeSelect}
                allCollections={allCollectionsResponse?.collections || []}
              />
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-1 gap-6 overflow-hidden px-4">
          <div className="border-r border-border py-4 overflow-scroll">
            <FieldsList
              fields={currentCollection.fields}
              selectedFieldId={selectedFieldId}
              collectionName={currentCollection.name}
              onFieldSelect={handleSelectField}
            />
          </div>

          <div className="flex-1 py-4 overflow-scroll">
            <FieldEditor
              field={selectedField}
              register={register}
              formData={formData}
              errors={errors}
              setValue={setValue}
              onSubmit={handleSubmit(onSubmit)}
              onCancel={handleCancel}
              allCollections={allCollectionsResponse?.collections || []}
              isLoading={
                addFieldMutation.isPending ||
                updateFieldMutation.isPending ||
                isSubmitting
              }
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
