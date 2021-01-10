type MapPropsToStyles = (
  props: Record<string, (string | boolean)>,
  // styles: Record<string, string>,
) => string;

const mapPropsToStyles: MapPropsToStyles = (props = {}/* , styles = {root: ''} */) => {
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
    // return { ...mappedStyles, [styles[className]]: true }
    return `${mappedStyles} ${className}`;
  }, '');

  // return clsx(styles.root, mappedClassNames);
  return `root ${mappedClassNames}`;
}

export { mapPropsToStyles }
