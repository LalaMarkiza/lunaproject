import { ResourceContent } from '../../types/resources';
import { cycleContent } from './cycleContent';
import { wellnessContent } from './wellnessContent';
import { nutritionContent } from './nutritionContent';
import { movementContent } from './movementContent';
import { fertilityContent } from './fertilityContent';
import { emotionalContent } from './emotionalContent';

// Combine all content into a single export
export const resourceContent: Record<string, ResourceContent> = {
  ...cycleContent,
  ...wellnessContent,
  ...nutritionContent,
  ...movementContent,
  ...fertilityContent,
  ...emotionalContent,
};