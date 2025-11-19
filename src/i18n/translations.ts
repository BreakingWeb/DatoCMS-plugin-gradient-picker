export type Locale = "en" | "fr";

export const translations = {
  en: {
    // Config Screen
    config: {
      hideInputs: {
        label: "Hide Inputs",
        hint: "hide the hex and rgba inputs",
      },
      hideOpacity: {
        label: "Hide Opacity",
        hint: "hide the opacity bar",
      },
      hideControls: {
        label: "Hide Controls",
        hint: "hide the entire top row of various control btns",
      },
      hideColorTypeBtns: {
        label: "Hide Color Type Buttons",
        hint: "hide the solid/gradient buttons",
      },
      hidePresets: {
        label: "Hide Presets",
        hint: "hide the preset color options",
      },
      hideEyeDrop: {
        label: "Hide Eye Dropper",
        hint: "hide and disable the eye dropper tool",
      },
      hideAdvancedSliders: {
        label: "Hide Advanced Sliders",
        hint: "hide the additional sliders (saturation, luminence, brightness)",
      },
      hideColorGuide: {
        label: "Hide Color Guide",
        hint: "hide the color guide, a tool that shows color pairings",
      },
      hideInputType: {
        label: "Hide Input Type Switcher",
        hint: "hide the input type selector, locking the type",
      },
      hideGradientType: {
        label: "Hide Gradient Type",
        hint: "hide the linear/circular gradient type toggle (only relevant in gradient mode)",
      },
      hideGradientAngle: {
        label: "Hide Gradient Angle",
        hint: "hide the gradient angle input (only relevant in gradient mode with a linear gradient)",
      },
      hideGradientStop: {
        label: "Hide Gradient Stop",
        hint: "hide the gradient point stop input (only relevant in gradient mode)",
      },
      hideGradientControls: {
        label: "Hide All Gradient Controls",
        hint: "hide the all gradient controls (the bar that appears below top controls when in gradient mode)",
      },
    },
    // Field Extension
    field: {
      name: "Gradient Picker",
      editGradient: "Click to edit gradient",
      placeholder: "linear-gradient(...)",
      invalidFormat:
        "Invalid format. Expected: gradient (linear-gradient, radial-gradient, etc.) or color (rgb, rgba, hsl, hex, etc.)",
    },
  },
  fr: {
    // Config Screen
    config: {
      hideInputs: {
        label: "Masquer les entrées",
        hint: "masquer les entrées hex et rgba",
      },
      hideOpacity: {
        label: "Masquer l'opacité",
        hint: "masquer la barre d'opacité",
      },
      hideControls: {
        label: "Masquer les contrôles",
        hint: "masquer toute la rangée supérieure des boutons de contrôle",
      },
      hideColorTypeBtns: {
        label: "Masquer les boutons de type de couleur",
        hint: "masquer les boutons solide/dégradé",
      },
      hidePresets: {
        label: "Masquer les préréglages",
        hint: "masquer les options de couleurs prédéfinies",
      },
      hideEyeDrop: {
        label: "Masquer la pipette",
        hint: "masquer et désactiver l'outil pipette",
      },
      hideAdvancedSliders: {
        label: "Masquer les curseurs avancés",
        hint: "masquer les curseurs supplémentaires (saturation, luminance, luminosité)",
      },
      hideColorGuide: {
        label: "Masquer le guide des couleurs",
        hint: "masquer le guide des couleurs, un outil qui montre les associations de couleurs",
      },
      hideInputType: {
        label: "Masquer le sélecteur de type d'entrée",
        hint: "masquer le sélecteur de type d'entrée, verrouillant le type",
      },
      hideGradientType: {
        label: "Masquer le type de dégradé",
        hint: "masquer le bouton de type de dégradé linéaire/circulaire (uniquement pertinent en mode dégradé)",
      },
      hideGradientAngle: {
        label: "Masquer l'angle du dégradé",
        hint: "masquer l'entrée d'angle du dégradé (uniquement pertinent en mode dégradé avec un dégradé linéaire)",
      },
      hideGradientStop: {
        label: "Masquer le point de dégradé",
        hint: "masquer l'entrée du point d'arrêt du dégradé (uniquement pertinent en mode dégradé)",
      },
      hideGradientControls: {
        label: "Masquer tous les contrôles de dégradé",
        hint: "masquer tous les contrôles de dégradé (la barre qui apparaît sous les contrôles supérieurs en mode dégradé)",
      },
    },
    // Field Extension
    field: {
      name: "Sélecteur de dégradé",
      editGradient: "Cliquez pour modifier le dégradé",
      placeholder: "linear-gradient(...)",
      invalidFormat:
        "Format invalide. Attendu : dégradé (linear-gradient, radial-gradient, etc.) ou couleur (rgb, rgba, hsl, hex, etc.)",
    },
  },
};

export type Translations = typeof translations.en;