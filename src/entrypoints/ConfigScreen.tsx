import type { RenderConfigScreenCtx } from "datocms-plugin-sdk";
import { Canvas, Form, FieldGroup, SwitchField } from "datocms-react-ui";
import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import { useTranslations } from "../i18n/useTranslations";

type Props = {
  ctx: RenderConfigScreenCtx;
};

type Parameters = {
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

export default function ConfigScreen({ ctx }: Props) {
  const parameters = ctx.plugin.attributes.parameters as Parameters;
  const t = useTranslations(ctx);
  const [previewGradient, setPreviewGradient] = useState(
    "linear-gradient(90deg, rgb(255,0,0) 0%, rgb(0,0,255) 100%)"
  );

  return (
    <Canvas ctx={ctx}>
      <div
        style={{
          display: "flex",
          gap: "var(--spacing-xl)",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1 }}>
          <Form>
            <FieldGroup>
              <SwitchField
                id="hideInputs"
                name="hideInputs"
                label={t.config.hideInputs.label}
                hint={t.config.hideInputs.hint}
                value={parameters.hideInputs ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideInputs: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideOpacity"
                name="hideOpacity"
                label={t.config.hideOpacity.label}
                hint={t.config.hideOpacity.hint}
                value={parameters.hideOpacity ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideOpacity: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideControls"
                name="hideControls"
                label={t.config.hideControls.label}
                hint={t.config.hideControls.hint}
                value={parameters.hideControls ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideControls: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideColorTypeBtns"
                name="hideColorTypeBtns"
                label={t.config.hideColorTypeBtns.label}
                hint={t.config.hideColorTypeBtns.hint}
                value={parameters.hideColorTypeBtns ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideColorTypeBtns: newValue,
                  });
                }}
              />

              <SwitchField
                id="hidePresets"
                name="hidePresets"
                label={t.config.hidePresets.label}
                hint={t.config.hidePresets.hint}
                value={parameters.hidePresets ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hidePresets: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideEyeDrop"
                name="hideEyeDrop"
                label={t.config.hideEyeDrop.label}
                hint={t.config.hideEyeDrop.hint}
                value={parameters.hideEyeDrop ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideEyeDrop: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideAdvancedSliders"
                name="hideAdvancedSliders"
                label={t.config.hideAdvancedSliders.label}
                hint={t.config.hideAdvancedSliders.hint}
                value={parameters.hideAdvancedSliders ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideAdvancedSliders: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideColorGuide"
                name="hideColorGuide"
                label={t.config.hideColorGuide.label}
                hint={t.config.hideColorGuide.hint}
                value={parameters.hideColorGuide ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideColorGuide: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideInputType"
                name="hideInputType"
                label={t.config.hideInputType.label}
                hint={t.config.hideInputType.hint}
                value={parameters.hideInputType ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideInputType: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideGradientType"
                name="hideGradientType"
                label={t.config.hideGradientType.label}
                hint={t.config.hideGradientType.hint}
                value={parameters.hideGradientType ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideGradientType: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideGradientAngle"
                name="hideGradientAngle"
                label={t.config.hideGradientAngle.label}
                hint={t.config.hideGradientAngle.hint}
                value={parameters.hideGradientAngle ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideGradientAngle: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideGradientStop"
                name="hideGradientStop"
                label={t.config.hideGradientStop.label}
                hint={t.config.hideGradientStop.hint}
                value={parameters.hideGradientStop ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideGradientStop: newValue,
                  });
                }}
              />

              <SwitchField
                id="hideGradientControls"
                name="hideGradientControls"
                label={t.config.hideGradientControls.label}
                hint={t.config.hideGradientControls.hint}
                value={parameters.hideGradientControls ?? false}
                onChange={(newValue) => {
                  ctx.updatePluginParameters({
                    ...parameters,
                    hideGradientControls: newValue,
                  });
                }}
              />
            </FieldGroup>
          </Form>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            position: "sticky",
            top: "var(--spacing-m)",
          }}
        >
          <div
            style={{
              background: "#222",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "var(--spacing-s)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ColorPicker
              value={previewGradient}
              onChange={setPreviewGradient}
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
        </div>
      </div>
    </Canvas>
  );
}
