import { connect } from "datocms-plugin-sdk";
import "datocms-react-ui/styles.css";
import ConfigScreen from "./entrypoints/ConfigScreen";
import GradientPickerField from "./entrypoints/GradientPickerField";
import { render } from "./utils/render";

connect({
	renderConfigScreen(ctx) {
		return render(<ConfigScreen ctx={ctx} />);
	},
	manualFieldExtensions() {
		return [
			{
				id: "gradientPicker",
				name: "Gradient Picker",
				type: "editor",
				fieldTypes: ["string", "text"],
			},
		];
	},
	renderFieldExtension(_fieldExtensionId, ctx) {
		return render(<GradientPickerField ctx={ctx} />);
	},
});
