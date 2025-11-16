import {
  renderField,
  renderPlexSonarrRadarrInstancesField,
} from "../settings_helpers.js";
import { renderHelp } from "../../helper.js";

export function renderAssetRenamerrSettings(formFields, config, rootConfig) {
  const wrapper = document.createElement("div");
  const help = renderHelp("asset_renamerr");
  if (help) wrapper.appendChild(help);
  wrapper.className = "settings-wrapper";
  Object.entries(config).forEach(([key, value]) => {
    if (key === "instances") {
      renderPlexSonarrRadarrInstancesField(
        wrapper,
        value,
        rootConfig,
        "asset_renamerr"
      );
    } else {
      renderField(wrapper, key, value);
    }
  });
  formFields.appendChild(wrapper);
}
