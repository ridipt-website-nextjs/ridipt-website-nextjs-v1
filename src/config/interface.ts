
// Base interface for common properties
interface BaseFeatureItem {
  title: string;
  subtitle: string;
  description: string;
}

// Interface for items with icon (image should be optional/undefined)
interface FeatureItemWithIcon extends BaseFeatureItem {
  icon: React.ComponentType<any>;
  image?: never; // This ensures image cannot be provided when icon is present
}

// Interface for items with image (icon should be optional/undefined)
interface FeatureItemWithImage extends BaseFeatureItem {
  image: any;
  icon?: never; // This ensures icon cannot be provided when image is present
}

// Union type that ensures either icon OR image is provided, but not both or neither
export type FeatureItem = FeatureItemWithIcon | FeatureItemWithImage;