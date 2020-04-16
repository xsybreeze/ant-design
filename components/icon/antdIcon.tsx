import React from 'react';
import AntdIcon, {
  createFromIconfontCN,
  getTwoToneColor,
  setTwoToneColor,
} from '@ant-design/icons';
import { withThemeSuffix, removeTypeTheme, alias } from './utils';

const iconsMap = require('@ant-design/icons/es/icons/index');

const LegacyTypeIcon = function LegacyTypeIcon(props: any) {
  const type = props.type;
  const theme = props.theme;

  const computedType = withThemeSuffix(removeTypeTheme(alias(type)), theme || 'outlined');
  const targetIconComponent = iconsMap[computedType];
  return targetIconComponent ? React.createElement(targetIconComponent, props) : null;
};

const Icon = function Icon(props: any) {
  const type = props.type;
  const component = props.component;
  const children = props.children;

  if (component || children) {
    return React.createElement(AntdIcon, { ...props });
  }

  if (typeof type === 'string') {
    return React.createElement(LegacyTypeIcon, { ...props, type });
  }

  return React.createElement(AntdIcon, null);
};

Icon.createFromIconfontCN = createFromIconfontCN;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
export default Icon;
