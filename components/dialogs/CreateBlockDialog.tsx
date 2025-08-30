"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { convertHtmlToCraftComponent } from "@/lib/utils/html-to-craft-converter";

interface CreateBlockDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateBlock?: (blockData: {
    name: string;
    description: string;
    component: React.ComponentType;
    htmlSource: string;
  }) => void;
}

export function CreateBlockDialog({
  isOpen,
  onClose,
  onCreateBlock,
}: CreateBlockDialogProps) {
  const [step, setStep] = useState<"input" | "preview" | "customize">("input");
  const [blockName, setBlockName] = useState("");
  const [blockDescription, setBlockDescription] = useState("");
  const [htmlInput, setHtmlInput] = useState("");
  const [previewComponent, setPreviewComponent] =
    useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedProperties, setExtractedProperties] = useState<any[]>([]);

  const handleAnalyzeHtml = () => {
    if (!htmlInput.trim()) {
      setError("Please paste your HTML code");
      return;
    }

    if (!blockName.trim()) {
      setError("Please enter a block name");
      return;
    }

    setIsProcessing(true);
    setError("");

    try {
      // Convert HTML to CraftJS component
      const result = convertHtmlToCraftComponent(htmlInput, blockName);

      setPreviewComponent(() => result.component);
      setExtractedProperties(result.properties);
      setStep("preview");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to process HTML");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCreateBlock = () => {
    if (!previewComponent) return;

    onCreateBlock?.({
      name: blockName,
      description: blockDescription,
      component: previewComponent,
      htmlSource: htmlInput,
    });

    // Reset form
    setStep("input");
    setBlockName("");
    setBlockDescription("");
    setHtmlInput("");
    setPreviewComponent(null);
    setExtractedProperties([]);
    setError("");
    onClose();
  };

  const handleClose = () => {
    setStep("input");
    setBlockName("");
    setBlockDescription("");
    setHtmlInput("");
    setPreviewComponent(null);
    setExtractedProperties([]);
    setError("");
    onClose();
  };

  const exampleHtml = `<div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        Build Something Amazing
      </h1>
      <p class="text-xl md:text-2xl mb-8 opacity-90">
        Transform your ideas into reality with our powerful tools
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started
        </button>
        <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>`;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Custom Block</DialogTitle>
          <DialogDescription>
            Convert your Tailwind HTML into a fully editable CraftJS component
          </DialogDescription>
        </DialogHeader>

        <Tabs value={step} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="input" disabled={step !== "input"}>
              1. Input HTML
            </TabsTrigger>
            <TabsTrigger value="preview" disabled={step !== "preview"}>
              2. Preview
            </TabsTrigger>
            <TabsTrigger value="customize" disabled={step !== "customize"}>
              3. Customize
            </TabsTrigger>
          </TabsList>

          <TabsContent value="input" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="blockName">Block Name</Label>
                  <Input
                    id="blockName"
                    value={blockName}
                    onChange={(e) => setBlockName(e.target.value)}
                    placeholder="e.g., Custom Hero Section"
                  />
                </div>

                <div>
                  <Label htmlFor="blockDescription">
                    Description (Optional)
                  </Label>
                  <Input
                    id="blockDescription"
                    value={blockDescription}
                    onChange={(e) => setBlockDescription(e.target.value)}
                    placeholder="Brief description of this block"
                  />
                </div>

                <div>
                  <Label htmlFor="htmlInput">Tailwind HTML Code</Label>
                  <Textarea
                    id="htmlInput"
                    value={htmlInput}
                    onChange={(e) => setHtmlInput(e.target.value)}
                    placeholder="Paste your Tailwind HTML here..."
                    className="min-h-[300px] font-mono text-sm"
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Example Tailwind HTML</Label>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
                      {exampleHtml}
                    </pre>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => setHtmlInput(exampleHtml)}
                  >
                    Use Example
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>What happens when you create a block:</Label>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Text elements become editable</li>
                    <li>• Buttons become interactive</li>
                    <li>• Images become replaceable</li>
                    <li>• Colors and styles become customizable</li>
                    <li>• All elements become draggable</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label>Block Preview</Label>
                <div className="border rounded-lg p-4 bg-white">
                  {previewComponent && React.createElement(previewComponent)}
                </div>
              </div>

              {extractedProperties.length > 0 && (
                <div>
                  <Label>Detected Customizable Properties</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {extractedProperties.map((prop, index) => (
                      <Badge key={index} variant="outline">
                        {prop.name}: {prop.type}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Alert>
                <AlertDescription>
                  Your HTML has been successfully converted to a CraftJS
                  component! All text, buttons, and images will be editable when
                  added to the canvas.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="customize" className="space-y-4">
            <div className="text-center py-8">
              <p className="text-gray-600">
                Advanced customization options will be available in a future
                update. For now, your block is ready to use!
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>

          {step === "input" && (
            <Button onClick={handleAnalyzeHtml} disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Analyze HTML"}
            </Button>
          )}

          {step === "preview" && (
            <Button onClick={handleCreateBlock}>Create Block</Button>
          )}

          {step === "customize" && (
            <Button onClick={handleCreateBlock}>Finish & Create Block</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
