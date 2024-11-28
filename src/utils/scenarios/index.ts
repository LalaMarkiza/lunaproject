import { ConversationScenario } from '../../types/chat';
import { emotionalScenarios } from './categories/emotionalScenarios';
import { physicalScenarios } from './categories/physicalScenarios';
import { sleepScenarios } from './categories/sleepScenarios';
import { nutritionScenarios } from './categories/nutritionScenarios';
import { exerciseScenarios } from './categories/exerciseScenarios';
import { relationshipScenarios } from './categories/relationshipScenarios';
import { workScenarios } from './categories/workScenarios';
import { selfCareScenarios } from './categories/selfCareScenarios';
import { medicalScenarios } from './categories/medicalScenarios';
import { fertilityScenarios } from './categories/fertilityScenarios';

export const allScenarios: Record<string, ConversationScenario[]> = {
  emotional: emotionalScenarios,
  physical: physicalScenarios,
  sleep: sleepScenarios,
  nutrition: nutritionScenarios,
  exercise: exerciseScenarios,
  relationship: relationshipScenarios,
  work: workScenarios,
  selfCare: selfCareScenarios,
  medical: medicalScenarios,
  fertility: fertilityScenarios
};