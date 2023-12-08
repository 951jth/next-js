const fontFamily = {
  regular: "Roboto-Regular",
  medium: "Roboto-Medium",
  bold: "Roboto-Bold",
};

export const Dimensions = {
  topNavigationHeight: 48,
  sideNavigationWidth: 250,
  sideNavigationCollapsedWidth: 80,
};

export const Typography = {
  regular16: { fontSize: 16, fontFamily: fontFamily.regular },
  regular15: { fontSize: 15, fontFamily: fontFamily.regular },
  regular14: { fontSize: 14, fontFamily: fontFamily.regular },
  regular13: { fontSize: 13, fontFamily: fontFamily.regular },
  regular11: { fontSize: 11, fontFamily: fontFamily.regular },
  medium20: { fontSize: 20, fontFamily: fontFamily.medium },
  medium18: { fontSize: 18, fontFamily: fontFamily.medium },
  medium14: { fontSize: 14, fontFamily: fontFamily.medium },
  medium12: { fontSize: 12, fontFamily: fontFamily.medium },
  bold28: { fontSize: 28, fontFamily: fontFamily.bold },
  bold20: { fontSize: 20, fontFamily: fontFamily.bold },
  bold18: { fontSize: 18, fontFamily: fontFamily.bold },
  bold16: { fontSize: 16, fontFamily: fontFamily.bold },
  bold14: { fontSize: 14, fontFamily: fontFamily.bold },
};

export const Colors = {
  primaryColor: "#007def",
  successColor: "#00CC6A",
  warningColor: "#EFB322",
  errorColor: "#DB3E07",
  backgroundColor: "#f7f7f7",

  lightPrimaryColor: "#E6F2FD",
  lightSuccessColor: "#DDF6EA",
  lightWarningColor: "#FDF7E9",
  lightErrorColor: "#FAE9E3",

  white: "#fff",
  black: "#000",
  gray2: "#fafafa",
  gray3: "#f5f5f5",
  gray4: "#f0f0f0",
  gray5: "#d9d9d9",
  gray6: "#bfbfbf",
  gray7: "#8c8c8c",
  gray8: "#595959",
  gray9: "#434343",
  gray10: "#262626",
  gray11: "#1f1f1f",
  gray12: "#141414",
};

export const Breakpoints = [576, 768, 992, 1200];
export const MediaQuery = Breakpoints.map(
  (breakpoint) => `@media (max-width: ${breakpoint - 1}px)`
);

const marginStyles = (styleName) => {
  const directionDist = [
    "Vertical",
    "Horizontal",
    "Top",
    "Right",
    "Bottom",
    "Left",
  ];
  const valueDist = [0, 4, 8, 12, 16, 24];

  const styles = {};
  const stylePrefix = styleName.substr(0, 1).toLowerCase();

  valueDist.forEach(function (value) {
    styles[`${stylePrefix}${value}`] = { margin: value };

    directionDist.forEach(function (direction) {
      const directionPrefix = direction.substr(0, 1).toLowerCase();
      let obj = { [`${styleName}${direction}`]: value };
      if (directionPrefix === "v") {
        obj = { [`${styleName}Top`]: value, [`${styleName}Bottom`]: value };
      } else if (directionPrefix === "h") {
        obj = { [`${styleName}Left`]: value, [`${styleName}Right`]: value };
      }
      styles[`${stylePrefix}${directionPrefix}${value}`] = obj;
    });
  });

  return styles;
};

export const Styles = {
  disabledText: {
    color: "#999",
  },
  columnCenterCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rowCenterCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowVerticalCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  formLabelText: {
    ...Typography.regular14,
  },

  idText: {
    color: Colors.primaryColor,
  },
  datetimeText: {
    ...Typography.regular13,
    color: Colors.gray6,
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  clickable: {
    cursor: "pointer",
    color: "#1677ff",
    textDecoration: "underline",
  },
  ...marginStyles("margin"),
  ...marginStyles("padding"),
};

//input selectbox disable css
export const formDisableStyle = {
  //selectbox disable
  "& .ant-select-disabled": {
    cursor: "auto",
    width: "unset !important",
    minWidth: "unset !important",
    "& .ant-select-arrow": {
      display: "none !important",
    },
    "& .ant-select-selector": {
      background: "unset !important",
      color: "unset !important",
      border: "unset",
      cursor: "unset !important",
      userSelect: "auto",
      width: "unset",
      padding: "0 4px !important",

      "& .ant-select-selection-search": {
        cursor: "unset",
        userSelect: "auto",
        "& .ant-select-selection-search-input": {
          cursor: "unset",
          userSelect: "unset !important",
        },
      },
      "& .ant-select-selection-item": {
        userSelect: "auto",
        padding: 0,
      },
    },
  },
  //input disable
  "& .ant-input-disabled, .ant-input-affix-wrapper-disabled": {
    background: "unset",
    color: "unset",
    border: "unset",
    cursor: "unset",
    padding: "0",
    "& .ant-btn-icon-only": {
      display: "none",
    },
  },
  //datepicker disable
  "& .ant-picker-disabled": {
    background: "unset",
    border: "unset",
    cursor: "unset",
    padding: 0,
    "& .ant-picker-input input": {
      color: "black",
      cursor: "unset",
    },
    "& .ant-picker-suffix": { display: "none" },
  },
  "& .ant-input": {},
  "& .ant-select-selector": {},
};
