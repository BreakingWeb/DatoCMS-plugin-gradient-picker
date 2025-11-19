import { connect } from "datocms-plugin-sdk";
import "datocms-react-ui/styles.css";
import ConfigScreen from "./entrypoints/ConfigScreen";
import GradientPickerField from "./entrypoints/GradientPickerField";
import { render } from "./utils/render";
import { translations } from "./i18n/translations";

// Detect browser locale for field extension name
// Note: manualFieldExtensions() doesn't receive ctx, so we use browser locale as fallback
function getFieldExtensionName(): string {
  const browserLocale = navigator.language.toLowerCase();
  const locale = browserLocale.startsWith("fr") ? "fr" : "en";
  return translations[locale].field.name;
}

connect({
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
  manualFieldExtensions() {
    return [
      {
        id: "gradientPicker",
        name: getFieldExtensionName(),
        type: "editor",
        fieldTypes: ["string", "text"],
      },
    ];
  },
  renderFieldExtension(_fieldExtensionId, ctx) {
    return render(<GradientPickerField ctx={ctx} />);
  },
});
