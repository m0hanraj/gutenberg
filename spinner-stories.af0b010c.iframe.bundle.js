"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8090],{"./packages/components/src/ui/utils/space.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return space}});function space(value){var _window$CSS,_window$CSS$supports;if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&null!==(_window$CSS=window.CSS)&&void 0!==_window$CSS&&null!==(_window$CSS$supports=_window$CSS.supports)&&void 0!==_window$CSS$supports&&_window$CSS$supports.call(_window$CSS,"margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(4px * ${value})`}},"./packages/components/src/utils/config-values.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _ui_utils_space__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/utils/space.ts"),_colors_values__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/utils/colors-values.js");const CONTROL_PROPS={controlSurfaceColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,controlTextActiveColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.theme,controlPaddingX:"12px",controlPaddingXLarge:"calc(12px * 1.3334)",controlPaddingXSmall:"calc(12px / 1.3334)",controlBackgroundColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.theme}`,controlDestructiveBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.alert.red,controlHeight:"36px",controlHeightXSmall:"calc( 36px * 0.6 )",controlHeightSmall:"calc( 36px * 0.8 )",controlHeightLarge:"calc( 36px * 1.2 )",controlHeightXLarge:"calc( 36px * 1.4 )"},TOGGLE_GROUP_CONTROL_PROPS={toggleGroupControlBackgroundColor:CONTROL_PROPS.controlBackgroundColor,toggleGroupControlBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.border,toggleGroupControlBackdropBackgroundColor:CONTROL_PROPS.controlSurfaceColor,toggleGroupControlBackdropBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.border,toggleGroupControlButtonColorActive:CONTROL_PROPS.controlBackgroundColor};__webpack_exports__.Z=Object.assign({},CONTROL_PROPS,TOGGLE_GROUP_CONTROL_PROPS,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(2)}`,cardPaddingSmall:`${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(4)}`,cardPaddingMedium:`${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(4)} ${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(6)}`,cardPaddingLarge:`${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(6)} ${(0,_ui_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(8)}`,surfaceBackgroundColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,surfaceColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"./packages/components/src/spinner/stories/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSize:function(){return CustomSize},Default:function(){return Default},default:function(){return stories}});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js");const spinAnimation=emotion_react_browser_esm.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,StyledSpinner=(0,emotion_styled_base_browser_esm.Z)("svg",{target:"ea4tfvq2"})("width:",config_values.Z.spinnerSize,"px;height:",config_values.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",colors_values.D.ui.theme,";overflow:visible;"),commonPathProps={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},SpinnerTrack=(0,emotion_styled_base_browser_esm.Z)("circle",{target:"ea4tfvq1"})(commonPathProps,";stroke:",colors_values.D.gray[300],";"),SpinnerIndicator=(0,emotion_styled_base_browser_esm.Z)("path",{target:"ea4tfvq0"})(commonPathProps,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",spinAnimation,";");var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedSpinner(_ref,forwardedRef){let{className:className,...props}=_ref;return(0,jsx_runtime.jsxs)(StyledSpinner,{className:classnames_default()("components-spinner",className),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...props,ref:forwardedRef,children:[(0,jsx_runtime.jsx)(SpinnerTrack,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,jsx_runtime.jsx)(SpinnerIndicator,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}UnforwardedSpinner.displayName="UnforwardedSpinner";const Spinner=(0,react.forwardRef)(UnforwardedSpinner);var src_spinner=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"`Spinner` is a component used to notify users that their action is being processed.",displayName:"Spinner",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"packages/components/src/spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}try{spinner.displayName="spinner",spinner.__docgenInfo={description:"`Spinner` is a component used to notify users that their action is being processed.",displayName:"spinner",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/spinner/index.tsx#spinner"]={docgenInfo:spinner.__docgenInfo,name:"spinner",path:"packages/components/src/spinner/index.tsx#spinner"})}catch(__react_docgen_typescript_loader_error){}var space=__webpack_require__("./packages/components/src/ui/utils/space.ts");var stories={title:"Components/Spinner",component:src_spinner,parameters:{sourceLink:"packages/components/src/spinner",controls:{expanded:!0},docs:{source:{state:"open"}}}};const Template=args=>(0,jsx_runtime.jsx)(src_spinner,{...args});Template.displayName="Template";const Default=Template.bind({}),CustomSize=Template.bind({});CustomSize.args={style:{width:(0,space.D)(20),height:(0,space.D)(20)}},CustomSize.parameters??={},CustomSize.parameters.docs??={},CustomSize.parameters.docs.description??={},CustomSize.parameters.docs.description.story??="The Spinner can be resized to any size, but the stroke width will remain unchanged.";try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/spinner/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/spinner/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=spinner-stories.af0b010c.iframe.bundle.js.map