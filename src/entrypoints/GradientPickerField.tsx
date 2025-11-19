import type { RenderFieldExtensionCtx } from "datocms-plugin-sdk";
import { Canvas, TextField } from "datocms-react-ui";
import { useState, useEffect, useRef } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import s from "./GradientPickerField.module.css";
import { useTranslations } from "../i18n/useTranslations";

type Props = {
  ctx: RenderFieldExtensionCtx;
};

type PluginParameters = {
  hideControls?: boolean;
  hideInputs?: boolean;
  hideOpacity?: boolean;
  hidePresets?: boolean;
  hideHue?: boolean;
  hideEyeDrop?: boolean;
  hideAdvancedSliders?: boolean;
  hideColorGuide?: boolean;
  hideInputType?: boolean;
  hideColorTypeBtns?: boolean;
  hideGradientType?: boolean;
  hideGradientAngle?: boolean;
  hideGradientStop?: boolean;
  hideGradientControls?: boolean;
};

export default function GradientPickerField({ ctx }: Props) {
  const currentValue = (ctx.formValues[ctx.fieldPath] as string) || "";
  const t = useTranslations(ctx);
  const [gradient, setGradient] = useState<string>(
    currentValue || "linear-gradient(90deg, rgb(255,0,0) 0%, rgb(0,0,255) 100%)"
  );
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerPosition, setPickerPosition] = useState({ top: 0, left: 0 });
  const pickerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const parameters = (ctx.plugin.attributes.parameters ||
    {}) as PluginParameters;

  const isValidGradient = (value: string): boolean => {
    if (!value || value.trim() === "") return true; // Empty is valid

    // Use the browser's CSS parser to validate
    const testElement = document.createElement("div");
    testElement.style.background = value;

    // If the browser accepts it, the style will be set
    // If invalid, the style will remain empty
    return testElement.style.background !== "";
  };

  const isInvalid = !isValidGradient(gradient);

  // Sync gradient state with field value changes
  useEffect(() => {
    if (currentValue && currentValue !== gradient) {
      setGradient(currentValue);
    }
  }, [currentValue]);

  // Set field-level error if gradient is invalid
  useEffect(() => {
    if (isInvalid && gradient.trim() !== "") {
      ctx.setFieldValue(ctx.fieldPath, gradient);
      // Block save by marking field as invalid
      // Note: DatoCMS doesn't expose a direct API to block saves,
      // but we can show the error state visually
    } else {
      ctx.setFieldValue(ctx.fieldPath, gradient);
    }
  }, [gradient, isInvalid, ctx, ctx.fieldPath]);

  const handleTogglePicker = () => {
    if (!isPickerOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      // Add extra space at bottom to prevent clipping
      setPickerPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
    setIsPickerOpen(!isPickerOpen);
  };

  // Close picker when clicking outside
  useEffect(() => {
    if (!isPickerOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPickerOpen]);

  const handleTextFieldChange = (newValue: string) => {
    setGradient(newValue);
    ctx.setFieldValue(ctx.fieldPath, newValue);
  };

  return (
    <Canvas ctx={ctx}>
      <div className={s.container}>
        <div className={s.previewContainer}>
          <button
            ref={buttonRef}
            type="button"
            className={s.previewWrapper}
            onClick={handleTogglePicker}
            title={t.field.editGradient}
          >
            <div
              className={`${s.preview} ${
                isInvalid && gradient.trim() !== "" ? s.invalid : ""
              }`}
              style={{ background: gradient }}
            />
            <div className={s.previewEditIcon}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1592 1.49653 13.3879 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.383 14.4084 2.61178C14.5032 2.84055 14.552 3.08575 14.552 3.33337C14.552 3.58099 14.5032 3.82619 14.4084 4.05497C14.3137 4.28374 14.1748 4.49161 13.9997 4.66671L5.33301 13.3334L1.99967 14.3334L2.99967 11L11.333 2.00004Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {isPickerOpen && (
            <div
              ref={pickerRef}
              className={s.popover}
              style={{
                top: `${pickerPosition.top}px`,
                left: `${pickerPosition.left}px`,
              }}
            >
              <ColorPicker
                value={gradient}
                onChange={setGradient}
                hideControls={parameters.hideControls}
                hideInputs={parameters.hideInputs}
                hideOpacity={parameters.hideOpacity}
                hidePresets={parameters.hidePresets}
                hideHue={parameters.hideHue}
                hideEyeDrop={parameters.hideEyeDrop}
                hideAdvancedSliders={parameters.hideAdvancedSliders}
                hideColorGuide={parameters.hideColorGuide}
                hideInputType={parameters.hideInputType}
                hideColorTypeBtns={parameters.hideColorTypeBtns}
                hideGradientType={parameters.hideGradientType}
                hideGradientAngle={parameters.hideGradientAngle}
                hideGradientStop={parameters.hideGradientStop}
                hideGradientControls={parameters.hideGradientControls}
              />
            </div>
          )}
        </div>

        <TextField
          id={ctx.fieldPath}
          name={ctx.fieldPath}
          label={undefined}
          value={gradient}
          onChange={handleTextFieldChange}
          placeholder={t.field.placeholder}
          error={
            isInvalid && gradient.trim() !== ""
              ? t.field.invalidFormat
              : undefined
          }
        />
      </div>
    </Canvas>
  );
}
