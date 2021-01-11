type MapPropsToStyles = (props: Record<string, (string | boolean)>) => string;

const mapPropsToStyles: MapPropsToStyles = (props = {}) => {
  const mappedClassNames = Object.entries(props).reduce((mappedStyles, [prop, value]) => {
    let className = '';
    switch(typeof value) {
      case 'boolean':
        className = value ? prop : '';
        break;
      case 'string':
        className = `${prop}-${value}`;
        break;
    }
    if (className === '') return mappedStyles;
    return `${mappedStyles} ${className}`;
  }, '');

  return `root${mappedClassNames}`;
}

export { mapPropsToStyles }
