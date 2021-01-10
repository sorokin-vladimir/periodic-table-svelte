import { mapPropsToStyles } from '../../utils/mapPropsToStyles';

export let as: TypographyAs = 'span';
export let color: TypographyColor;
export let variant: TypographyVariant = 'primary-body';
export let weight: TypographyWeight = 'regular';
export let isTruncate = false;

let className = '';

$: if (
  !color &&
  (variant === 'label' || variant === 'label-small')
) {
  color = 'text-secondary';
  console.log(`script:16 | set color to `, color);
}

$: console.log(`script:16 | props`, $$props, mapPropsToStyles($$props));

$: className = mapPropsToStyles($$props);

// TYPES
type TypographyVariant = 'label-primary' |
  'label' |
  'label-small' |
  'subtitle' |
  'primary-body' |
  'body-semibold' |
  'title';
type TypographyAs = 'span' | 'div';
type TypographyColor = 'white' | 'text-secondary' | 'btn-disabled';
type TypographyWeight = 'extra-light' |
  'light' |
  'regular' |
  'medium' |
  'semibold' |
  'bold' |
  'extra-bold';

// type Typography = {
//   // children: ReactNode;
//   variant?: TypographyVariant;
//   as?: TypographyAs;
//   color?: TypographyColor;
//   weight?: TypographyWeight;
//   isTruncate?: boolean;
// };

$: console.log(`index:2 | props`, $$props, $$slots);
