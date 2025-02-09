import { openai } from '@ai-sdk/openai';
import { fireworks } from '@ai-sdk/fireworks';

import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';

export const myProvider = customProvider({
  languageModels: {
    'chat-model-small': openai('gpt-4o-mini'),
    'chat-model-large': openai('gpt-4o'),
    'chat-model-reasoning': wrapLanguageModel({
      model: fireworks('accounts/fireworks/models/deepseek-r1'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'chat-model-deepseek-v3': fireworks('accounts/fireworks/models/deepseek-v3'),
    'chat-model-llama-v3p1': fireworks('accounts/fireworks/models/llama-v3p1-405b-instruct'),
    'title-model': openai('gpt-4-turbo'),
    'block-model': openai('gpt-4o-mini'),
  },
  imageModels: {
    'small-model': openai.image('dall-e-2'),
    'large-model': openai.image('dall-e-3'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-small',
    name: 'Small model',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'chat-model-large',
    name: 'Large model',
    description: 'Large model for complex, multi-step tasks',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
  // New Fireworks model entries added below
  {
    id: 'chat-model-deepseek-v3',
    name: 'DeepSeek V3',
    description: 'Fireworks DeepSeek V3 model for advanced reasoning tasks',
  },
  {
    id: 'chat-model-llama-v3p1',
    name: 'Llama V3.1 405B',
    description: 'Large Llama 3.1 405B instruct model for complex tasks',
  },
];
